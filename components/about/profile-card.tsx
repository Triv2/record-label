import ImageContainer from "../image-container";
import { Image as SanityImage } from "sanity";
interface ProfileCardProps {
  image: SanityImage;
  title: string;
  name: string;
}

const ProfileCard = ({ image, title, name }: ProfileCardProps) => {
  return (
    <div className="flex flex-col w-auto h-auto border">
      <ImageContainer
        width={1920}
        height={1080}
        image={image}
        imageClassName="object-cover w-full"
      />
      <span className="p-2 flex items-center w-full justify-center tracking-tighter">
        {name}, {title}
      </span>
    </div>
  );
};
export default ProfileCard;
