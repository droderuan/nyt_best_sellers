import { BookDto } from "@/client/dtos";

export interface BookCardProps {
  book: BookDto;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div>
      <p>{book.title}</p>
    </div>
  );
};

export default BookCard;
