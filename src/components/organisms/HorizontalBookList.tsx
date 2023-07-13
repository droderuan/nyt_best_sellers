import { BookDto } from "@/client/dtos";
import BookCard, { BookCardProps } from "../molecules/BookCard";

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
      <h2>{name}</h2>
      <div className={"flex w-full gap-1 overflow-auto"}>
        {books.map((book) => (
          <BookCard key={book.book_uri} book={book} />
        ))}
      </div>
    </div>
  );
};

export default HorizontalBookList;
