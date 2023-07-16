import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

export interface SvgIconProps {
  src: string | StaticImport;
  alt: string;
  link?: string;
  size: "sm" | "normal";
}

const SvgIcon: React.FC<SvgIconProps> = ({ src, alt, size, link }) => {
  return (
    <div className={`${size === "sm" ? "w-8" : "w-11"}`}>
      {link ? (
        <Link href={link} target="_blank">
          <Image priority src={src} alt={alt} />
        </Link>
      ) : (
        <Image priority src={src} alt={alt} />
      )}
    </div>
  );
};

export default SvgIcon;
