import { BookDto } from "@/client/dtos";
import Chip from "@/components/atoms/chip";
import Skeleton from "@/components/atoms/skeleton";
import SpanDisplay from "@/components/atoms/spanDisplay";
import Image from "next/image";
import { Suspense } from "react";

export interface BookCardProps {
  book: BookDto;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="w-60 h-[450px] p-1  relative bg-slate-300 rounded bg-opacity-25 flex flex-col justify-between">
      <div className="absolute top-1 z-30 left-1 bg-slate-900 text-slate-100 bg-opacity-80 bg-trans rounded p-1">
        <span className="inline-block font-bold">#{book.rank}</span>
      </div>
      <div>
        <div className="h-44 w-32 m-auto relative z-10 top-0">
          <Suspense fallback={<Skeleton variant="fill" />}>
            <Image
              alt={`${book.title}-book-cover-img`}
              src={book.book_image}
              fill
            />
          </Suspense>
        </div>
        <div>
          <h3 className="font-medium line-clamp-2 text-ellipsis">
            {book.title}
          </h3>
          <SpanDisplay
            display="Author:"
            value={book.author}
            defaultValue="Missing"
          />
          <SpanDisplay
            display="Publisher:"
            value={book.publisher}
            defaultValue="Missing"
          />
          <SpanDisplay
            display="Weeks on list:"
            value={book.weeks_on_list}
            defaultValue="Missing"
          />
          <span className="text-xs ">Description</span>
          <p className="text-sm line-clamp-4 text-ellipsis">
            {book.description}
          </p>
        </div>
      </div>
      <div>
        <p className="font-normal text-xs mb-1">Check out!</p>
        <div className="flex items-center flex-wrap gap-1">
          {book.buy_links.map((buyLink) => (
            <Chip key={buyLink.name} value={buyLink.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
