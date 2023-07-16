import { BookDto } from "@/client/dtos";
import Image from "next/image";
import BookCard, { BookCardProps } from "../../molecules/bookCard";
import LikeSvg from "../../../../public/heart-svgrepo-com.svg";
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
      <h2 className="antialiased font-light mb-1 text-xl lg:text-2xl inline">
        {name}{" "}
        <Image
          priority
          src={LikeSvg}
          height={24}
          width={24}
          alt="like the list name"
          className=" inline"
        />
      </h2>
      <div className="p-1 overflow-auto">
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
