"use client";

import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from "react";
import { ListBookDto } from "../client/dtos";

interface BooksContextData {
  toggleFavoriteList(listName: string): void;
  isFavorite(listName: string): boolean;
  reoderListByFavorite(bookList: ListBookDto[]): ListBookDto[];
}

interface BooksProvider {
  children: React.ReactNode;
}

export interface ToastMessage {
  id: number;
  type?: "info" | "success" | "error";
  message: string;
}

const BASE_STORAGE = "ny-times-best-sellers";

const BooksContext = createContext<BooksContextData>({} as BooksContextData);

const BooksProvider: React.FC<BooksProvider> = ({ children }) => {
  const [favoriteList, setFavoriteList] = useState<string[]>([]);

  useEffect(() => {
    const favoritesStorage =
      localStorage.getItem(`${BASE_STORAGE}:favorite_list`) || "[]";
    const favorites = JSON.parse(favoritesStorage) as string[];
    setFavoriteList(favorites);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      `${BASE_STORAGE}:favorite_list`,
      JSON.stringify(favoriteList)
    );
  }, [favoriteList]);

  const isFavorite = useCallback(
    (listName: string) => favoriteList.includes(listName),
    [favoriteList]
  );

  const toggleFavoriteList = useCallback(
    (listName: string) => {
      const isAlreadyFavorite = isFavorite(listName);

      if (isAlreadyFavorite) {
        setFavoriteList((old) => [
          ...old.filter((value) => value !== listName),
        ]);
      } else {
        setFavoriteList((old) => [...old, listName]);
      }
    },
    [isFavorite]
  );

  const reoderListByFavorite = useCallback(
    (bookList: ListBookDto[]) => {
      return bookList.sort((a, b) => (isFavorite(a.display_name) ? -1 : 0));
    },
    [isFavorite]
  );

  return (
    <BooksContext.Provider
      value={{ toggleFavoriteList, isFavorite, reoderListByFavorite }}
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
