import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";

export interface SvgIconProps {
  icon: IconType;
  alt: string;
  link?: string;
  size: "sm" | "normal";
}

const SvgIcon: React.FC<SvgIconProps> = ({ icon: Icon, alt, size, link }) => {
  return (
    <div className={`${size === "sm" ? "text-sm" : "text-lg"}`}>
      {link ? (
        <Link href={link} target="_blank">
          <Icon />
        </Link>
      ) : (
        <Icon />
      )}
    </div>
  );
};

export default SvgIcon;
