import Link from "next/link";
import ImageContainer from "../image-container";
import { Image as SanityImage } from "sanity";

interface ArtistProps {
  image: SanityImage;
  title?: string;
  name?: string;
}

const Artist = ({ image, title, name }: ArtistProps) => {
  let route = `${name}`;
  route = route.replace(/\s/g, "-");
  return (
    <Link href={`/artists/${route}`} className="flex flex-col border z-10">
      <span className="border-b p-2">{name}</span>
      <ImageContainer
       
        alt={title}
        image={image}
        imageClassName="transition-opacity  object-cover"
        classesWrapper="h-full bg-no-repeat bg-cover bg-fixed bg-center w-full"
      />
    </Link>
  );
};
export default Artist;
