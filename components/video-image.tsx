import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";
import { cn } from "@/lib/utils";

interface VideoImageProps {
  image?: { asset?: any };
  alt?: string;
 
  size?: string;
  classesWrapper?: string;
  "data-sanity"?: string;
  imageClassName?: string;
  priority?:boolean;
}

export default function VideoImage({
  image,
  alt = "Cover image",

  size = "80vw",
  classesWrapper,
  imageClassName,
  priority=false,
  ...props
}: VideoImageProps) {
  const imageUrl = image && urlForImage(image)?.fit("crop").url();

  return (
    <div className={`${classesWrapper}`} data-sanity={props["data-sanity"]}>
      {imageUrl && (
        <Image className={cn("h-full w-full", imageClassName)} alt={alt} fill sizes={size} src={imageUrl} priority={priority} quality="50"  />
      )}
    </div>
  );
}
