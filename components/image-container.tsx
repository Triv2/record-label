import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";
import { cn } from "@/lib/utils";

interface ImageContainerProps {
  image?: { asset?: any };
  alt?: string;
  width?: number;
  height?: number;
  size?: string;
  classesWrapper?: string;
  "data-sanity"?: string;
  imageClassName?: string;
  priority?:boolean;
}

export default function ImageContainer({
  image,
  alt = "Cover image",
  width = 50,
  height = 50,
  size = "80vw",
  classesWrapper,
  imageClassName,
  priority=false,
  ...props
}: ImageContainerProps) {
  const imageUrl = image && urlForImage(image)?.fit("crop").url();

  return (
    <div className={`${classesWrapper}`} data-sanity={props["data-sanity"]}>
      {imageUrl && (
        <Image className={cn("h-full w-full ", imageClassName)} alt={alt} width={width} height={height} sizes={size} src={imageUrl} priority={priority} quality="50"  />
      )}
    </div>
  );
}