"use client";
import ImageContainer from "@/components/image-container";
import Link from "next/link";

import { Image as SanityImage } from "sanity";
interface StreamingPlaylistCardProps {
  image: SanityImage;
  route: string;
}

const StreamingPlaylistCard = ({
  image,
  route,
}: StreamingPlaylistCardProps) => {
  let nRoute = `${route}`;
  nRoute = route.replace(/\s/g, "-");

  return (
    <Link
      href={`/artists/playlists/${nRoute}`}
      rel="noopener noreferrer"
      target="_blank"
      className="w-full  h-full group relative  "
    >
      <ImageContainer
        image={image}
        imageClassName="transition-opacity  object-cover"
        classesWrapper="h-full bg-no-repeat bg-cover bg-fixed bg-center w-full "
      />
      <div className="absolute inset-0 flex bg-black/50  items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 ease-linear" />
    </Link>
  );
};
export default StreamingPlaylistCard;