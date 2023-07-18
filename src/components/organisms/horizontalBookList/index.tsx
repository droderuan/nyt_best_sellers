import BookCard from "../../molecules/bookCard";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useBooks } from "@/hooks/useBooks";
import { ListBookDto } from "@/hooks/client/dtos";
export interface HorizontalBookListProps {
  listBooks: ListBookDto;
}

const HorizontalBookList: React.FC<HorizontalBookListProps> = ({
  listBooks,
}) => {
  const { isFavorite, toggleFavoriteList } = useBooks();

  return (
    <div>
      <div className="flex  items-center ">
        <h2 className="antialiased font-light mb-1 text-xl lg:text-2xl inline">
          {listBooks.list_name}
        </h2>
        <button
          onClick={() => toggleFavoriteList(listBooks)}
          className="ml-1 p-2 rounded-full hover:bg-teal-100 transition-colors"
        >
          <span className="text-3xl inline text-yellow-300">
            {isFavorite(listBooks.list_name) ? (
              <AiFillStar />
            ) : (
              <AiOutlineStar />
            )}
          </span>
        </button>
      </div>
      <div className="p-1 overflow-auto">
        <div className={"inline-flex gap-1 mb-1"}>
          {listBooks.books.map((book) => (
            <BookCard key={book.book_uri} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalBookList;
