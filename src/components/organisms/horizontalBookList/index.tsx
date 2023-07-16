import { BookDto } from "@/client/dtos";
import Image from "next/image";
import BookCard from "../../molecules/bookCard";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useBooks } from "@/hooks/useBooks";
export interface HorizontalBookListProps {
  name: string;
  books: BookDto[];
}

const HorizontalBookList: React.FC<HorizontalBookListProps> = ({
  name,
  books,
}) => {
  const { isFavorite, toggleFavoriteList } = useBooks();

  return (
    <div>
      <div className="flex  items-center ">
        <h2 className="antialiased font-light mb-1 text-xl lg:text-2xl inline">
          {name}
        </h2>
        <button
          onClick={() => toggleFavoriteList(name)}
          className="ml-1 p-2 rounded-full hover:bg-teal-100 transition-colors"
        >
          <span className="text-3xl inline text-yellow-300">
            {isFavorite(name) ? <AiFillStar /> : <AiOutlineStar />}
          </span>
        </button>
      </div>
      <div className="p-1 overflow-auto">
        <div className={"inline-flex gap-1 mb-1"}>
          {books.map((book) => (
            <BookCard key={book.book_uri} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalBookList;
