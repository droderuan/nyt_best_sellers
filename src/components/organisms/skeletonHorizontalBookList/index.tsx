import { BookDto } from "@/client/dtos";
import Skeleton from "@/components/atoms/skeleton";
import SkeletonBookCard from "@/components/molecules/skeletonBookCard";
import BookCard, { BookCardProps } from "../../molecules/bookCard";

const SkeletonHorizontalBookList: React.FC = () => {
  return (
    <div>
      <h2 className="w-1/4 mb-2">
        <Skeleton variant="line" rounded />
      </h2>
      <div className={"overflow-auto"}>
        <div className={"inline-flex gap-1"}>
          {Array.from(Array(5)).map((_, index) => (
            <SkeletonBookCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonHorizontalBookList;
