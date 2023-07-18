import {
  getStorageItem,
  removeStorageItem,
  setStorageItem,
} from "@/utils/myLocalStorage";
import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from "react";
import { BookDto, ListBookDto } from "./client/dtos";

interface TrackBook {
  uri: string;
}
interface BooksContextData {
  toggleFavoriteList(list: ListBookDto): void;
  isFavorite(listName: string): boolean;
  reoderListByFavorite(bookList: ListBookDto[]): ListBookDto[];
  checkForUpdatesInList: (lists: ListBookDto[]) => {
    hasUpdate: boolean;
    lists: {
      name: string;
      news: {
        title: string;
      }[];
      out: {
        title: string;
      }[];
    }[];
  };
}

interface BooksProvider {
  children: React.ReactNode;
}

const BooksContext = createContext<BooksContextData>({} as BooksContextData);

const BooksProvider: React.FC<BooksProvider> = ({ children }) => {
  const [favoriteList, setFavoriteList] = useState<string[]>([]);

  useEffect(() => {
    const favoritesStorage = getStorageItem("favorite_list") || "[]";
    const favorites = JSON.parse(favoritesStorage) as string[];
    setFavoriteList(favorites);
  }, []);

  useEffect(() => {
    setStorageItem("favorite_list", JSON.stringify(favoriteList));
  }, [favoriteList]);

  const isFavorite = useCallback(
    (listName: string) => favoriteList.includes(listName),
    [favoriteList]
  );

  const reoderListByFavorite = useCallback(
    (bookList: ListBookDto[]) => {
      return bookList.sort((a, b) => (isFavorite(a.display_name) ? -1 : 0));
    },
    [isFavorite]
  );

  const getLocalFavoriteBooks = useCallback((listName: string): TrackBook[] => {
    const bookList = getStorageItem(`favorite_list:${listName}:order`);

    return bookList ? JSON.parse(bookList) : undefined;
  }, []);

  const setFavoriteBooks = useCallback((list: ListBookDto) => {
    const books = list.books.map((book) => ({
      uri: book.book_uri,
      title: book.title,
    }));
    setStorageItem(
      `favorite_list:${list.list_name}:order`,
      JSON.stringify(books)
    );
  }, []);

  const unSetFavoriteBooks = useCallback((list: ListBookDto) => {
    removeStorageItem(`favorite_list:${list.list_name}:order`);
  }, []);

  const diffBooks = (
    listA: { list: any[]; key: string },
    listB: { list: any[]; key: string }
  ) => {
    const diff = {
      includes: [] as { title: string }[],
      notIncludes: [] as { title: string }[],
    };
    listA.list.forEach((book) => {
      const inLocalList = listB.list.some(
        (localBook) => localBook[listB.key] === book[listA.key]
      );
      if (inLocalList) {
        diff.includes.push({ title: book.title });
      } else {
        diff.notIncludes.push({ title: book.title });
      }
    });
    return diff;
  };

  const checkForUpdatesInList = useCallback(
    (lists: ListBookDto[]) => {
      let hasUpdate = false;
      const favoriteLists = lists.filter((list) => isFavorite(list.list_name));

      const checkedLists = favoriteLists.map((favList) => {
        const localBooksList = getLocalFavoriteBooks(favList.list_name);

        const checkForNewBooks = diffBooks(
          { list: favList.books, key: "book_uri" },
          {
            list: localBooksList,
            key: "uri",
          }
        );

        const checkForOutBooks = diffBooks(
          {
            list: localBooksList,
            key: "uri",
          },
          { list: favList.books, key: "book_uri" }
        );

        if (
          checkForNewBooks.notIncludes.length > 0 ||
          checkForOutBooks.notIncludes.length > 0
        ) {
          hasUpdate = true;
          setFavoriteBooks(favList);
        }
        return {
          name: favList.list_name,
          news: checkForNewBooks.notIncludes,
          out: checkForOutBooks.notIncludes,
        };
      });

      return { hasUpdate, lists: checkedLists };
    },
    [isFavorite, getLocalFavoriteBooks, setFavoriteBooks]
  );

  const toggleFavoriteList = useCallback(
    (list: ListBookDto) => {
      const isAlreadyFavorite = isFavorite(list.list_name);
      if (isAlreadyFavorite) {
        setFavoriteList((old) => [
          ...old.filter((value) => value !== list.list_name),
        ]);
        unSetFavoriteBooks(list);
      } else {
        setFavoriteList((old) => [...old, list.list_name]);
        setFavoriteBooks(list);
      }
    },
    [isFavorite, setFavoriteBooks, unSetFavoriteBooks]
  );

  return (
    <BooksContext.Provider
      value={{
        toggleFavoriteList,
        isFavorite,
        reoderListByFavorite,
        checkForUpdatesInList,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

function useBooks(): BooksContextData {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error("useBooks must be used within BooksProvider");
  }

  return context;
}

export { useBooks, BooksProvider };
