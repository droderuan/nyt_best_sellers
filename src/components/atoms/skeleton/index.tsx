export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: "fill" | "line";
  rounded?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({
  variant,
  rounded = false,
  className,
  ...props
}) => {
  const height = variant === "fill" ? "h-full" : "h-3";
  const roundedSkeleton = rounded ? "rounded" : "";
  return (
    <div
      className={`w-full ${height} ${roundedSkeleton} bg-gray-400 animate-pulse ${className}`}
      {...props}
    />
  );
};

export default Skeleton;
