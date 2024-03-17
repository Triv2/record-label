"use client";
import { Image as SanityImage } from "sanity";
import ImageContainer from "../image-container";

import Link from "next/link";

interface ArtistReleaseCardProps {
  image: SanityImage;
  className?: string;
  title?: string;
  name?: string;
  width?: number;
  height?: number;
  imageClassName?: string;
}

export const ArtistReleaseCard = ({
  image,
  title,
  name,
  className,
  width,
  height,
  imageClassName,
}: ArtistReleaseCardProps) => {
  let nRoute = title?.replace(/\s/g, "-");

  return (
    <Link
      className={className}
      href={`/artists/releases/${nRoute}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="uppercase flex gap-6 tracking-tighter text-xs sm:text-sm items-center  border-b px-2 py-5 dark:border-white border-black w-full">
        <span>
          {name} - {title}{" "}
        </span>
      </div>
      <ImageContainer
        image={image}
        imageClassName={imageClassName}
        classesWrapper="h-full bg-no-repeat bg-cover bg-fixed bg-center w-full"
      />
    </Link>
  );
};