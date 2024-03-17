"use client";
import ImageContainer from "@/components/image-container";
import { useRouter } from "next/navigation";
import { Image as SanityImage } from "sanity";
interface StreamingPlaylistCardProps {
  image: SanityImage;
  route: string;
}

const StreamingPlaylistCard = ({ image, route }: StreamingPlaylistCardProps) => {
  const router = useRouter();
  let nRoute = `${route}`;
  nRoute = route.replace(/\s/g, "-");
  const onClick = () => {
    router.push(`/artists/playlists/${nRoute}`);
  };
  return (
    <div onClick={() => onClick()} className="w-full h-full group relative border max-w-[500px] max-h-[500px]">
      <ImageContainer
        image={image}
        imageClassName="transition-opacity  object-cover"
        classesWrapper="h-full bg-no-repeat bg-cover bg-fixed bg-center w-full "
      />
      <div className="absolute inset-0 flex bg-black/50 items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 ease-linear" />
    </div>
  );
};
export default StreamingPlaylistCard;
