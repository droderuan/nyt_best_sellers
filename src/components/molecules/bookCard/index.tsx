import { BookDto } from "@/client/dtos";
import Skeleton from "@/components/atoms/skeleton";
import Image from "next/image";
import { Suspense } from "react";

export interface BookCardProps {
  book: BookDto;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="w-56 h-96  border-2 relative border-rose-600">
      <div className="absolute top-1 z-30 left-1 bg-slate-900 text-slate-100 bg-opacity-80 bg-trans rounded p-1">
        <span className="inline-block font-bold">#{book.rank}</span>
      </div>
      <div className="h-60 w-44 m-auto relative z-10 top-0">
        <Suspense fallback={<Skeleton variant="fill" />}>
          <Image
            alt={`${book.title}-book-cover-img`}
            src={book.book_image}
            fill
          />
        </Suspense>
      </div>
      <div className="p-1">
        <h3 className="font-medium line-clamp-3 text-ellipsis">{book.title}</h3>
      </div>
    </div>
  );
};

export default BookCard;
