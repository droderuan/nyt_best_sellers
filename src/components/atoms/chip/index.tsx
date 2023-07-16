import Link from "next/link";
import Button from "../button";

interface ChipButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string | number;
}
export interface ChipProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string | number;
  isLink?: false;
  link?: string;
  alt?: string;
}

export interface ChipLinkProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string | number;
  isLink: true;
  link: string;
  alt: string;
}

const ChipButton: React.FC<ChipButtonProps> = (props) => {
  return (
    <button
      className="w-fit text-[10px] rounded-full bg-teal-500 p-1 font-bold text-white hover:bg-teal-700 transition-colors"
      {...props}
    >
      <span>{props.value}</span>
    </button>
  );
};

const Chip: React.FC<ChipProps | ChipLinkProps> = ({
  value,
  link,
  isLink,
  alt,
  ...props
}) => {
  return isLink ? (
    <Link href={link} target="_blank">
      <ChipButton value={value} {...props} />
    </Link>
  ) : (
    <ChipButton value={value} {...props} />
  );
};

export default Chip;
