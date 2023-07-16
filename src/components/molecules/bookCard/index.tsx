import { BookDto } from "@/client/dtos";
import Skeleton from "@/components/atoms/skeleton";
import SpanDisplay from "@/components/atoms/SpanDisplay";
import SvgIcon from "@/components/atoms/SvgIcon";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import AmazonIcon from "../../../../public/amazon.svg";
import AppleBooksIcon from "../../../../public/apple-ibooks.svg";

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
        </div>
      </div>
      <div>
        <p className="font-normal text-xs mb-1">Check out!</p>
        <div className="flex items-center gap-1">
          <SvgIcon
            size="normal"
            src={AmazonIcon}
            alt="Buy on amazon"
            link="http:\/\/www.amazon.com\/Ends-Us-Novel-Colleen-Hoover-ebook\/dp\/B0176M3U10?tag=NYTBSREV-20"
          />
          <SvgIcon
            size="sm"
            src={AppleBooksIcon}
            alt="Buy on apple books"
            link="http:\/\/www.amazon.com\/Ends-Us-Novel-Colleen-Hoover-ebook\/dp\/B0176M3U10?tag=NYTBSREV-20"
          />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
