import Link from "next/link";

import { Image as SanityImage } from "sanity";
import ArtistImage from "./artist-image";

interface ArtistProps {
  image: SanityImage;
  title?: string;
  name?: string;
}

const Artist = ({ image, title, name }: ArtistProps) => {
  let route = `${name}`;
  route = route.replace(/\s/g, "-");
  return (
    <Link
      href={`/artists/${route}`}
      className="flex flex-col border border-black dark:border-white sm:min-h-[450px] z-10"
    >
      <span className="py-5 text-sm sm:text-md md:text-lg p-2">{name}</span>
      <ArtistImage
        alt={title}
        image={image}
        imageClassName="transition-opacity  object-cover  "
        classesWrapper="h-full bg-no-repeat bg-cover bg-fixed bg-center border-t border-black dark:border-white w-full"
      />
    </Link>
  );
};
export default Artist;