import Skeleton from "@/components/atoms/skeleton";

const SkeletonBookCard: React.FC = () => {
  return (
    <div className="w-56 h-96   relative">
      <div className="h-60 w-44 m-auto mb-5 relative z-10 top-0">
        <Skeleton variant="fill" />
      </div>
      <div className="p-1">
        <Skeleton className="mb-2 w-3/4" variant="line" rounded />
        <div className="w-3/4 flex flex-col gap-1">
          <Skeleton variant="line" className="w-2/4 " />
          <Skeleton variant="line" className="w-1/4" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonBookCard;
