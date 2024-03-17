"use client";

import ImageContainer from "../../image-container";
import { Image as SanityImage } from "sanity";

import Link from "next/link";

interface NewReleaseCardProps {
  image: SanityImage;
  className?: string;
  title?: string;
  name?: string;
  wrapper?: string;
  imageClassName?: string;
  priority?: boolean;
}

export const NewReleaseCard = ({
  image,
  title,
  name,
  className,
  wrapper,
  imageClassName,
  priority,
}: NewReleaseCardProps) => {
  let nRoute = title?.replace(/\s/g, "-");

  return (
    <div className={className}>
      <Link
        href={`/artists/releases/${nRoute}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <ImageContainer
          image={image}
          imageClassName={imageClassName}
          priority={priority}
          classesWrapper={wrapper}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 ease-linear">
          <h1 className="text-background dark:text-foreground z-20">
            {name} - {title}
          </h1>
        </div>
        <div className="absolute inset-0 flex bg-black/50 items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 ease-linear " />
      </Link>
    </div>
  );
};