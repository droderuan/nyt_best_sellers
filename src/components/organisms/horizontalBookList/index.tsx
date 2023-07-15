import { BookDto } from "@/client/dtos";
import BookCard, { BookCardProps } from "../../molecules/bookCard";

export interface HorizontalBookListProps {
  name: string;
  books: BookDto[];
}

const HorizontalBookList: React.FC<HorizontalBookListProps> = ({
  name,
  books,
}) => {
  return (
    <div>
      <h2 className="antialiased font-light mb-1 text-xl lg:text-2xl">
        {name}
      </h2>
      <div className={"overflow-auto"}>
        <div className={"inline-flex gap-1"}>
          {books.map((book) => (
            <BookCard key={book.book_uri} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalBookList;
