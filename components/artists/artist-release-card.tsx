"use client";
import { Image as SanityImage } from "sanity";
import ImageContainer from "../image-container";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  let nRoute = title?.replace(/\s/g, "-");
  const onClick = () => {
    router.push(`/artists/releases/${nRoute}`);
  };
  return (
    <div onClick={() => onClick()} className={className}>
      <ImageContainer
        width={width}
        height={height}
        image={image}
        imageClassName={imageClassName}
        classesWrapper="h-full bg-no-repeat bg-cover bg-fixed bg-center w-full"
      />

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 ease-linear">
        <h1 className="text-background dark:text-foreground z-20">
          {name} - {title}
        </h1>
      </div>
      <div className="absolute inset-0 flex bg-black/50 items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 ease-linear" />
    </div>
  );
};
