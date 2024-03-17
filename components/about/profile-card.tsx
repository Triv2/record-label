import ImageContainer from "../image-container";
interface ProfileCardProps {
  image: {
    alt: string;
    asset?: any;
  };
  title: string;
  name: string;
}

const ProfileCard = ({ image, title, name }: ProfileCardProps) => {
  return (
    <div className="flex flex-col w-auto h-auto border border-black dark:border-white">
      <ImageContainer
        width={1920}
        height={1080}
        image={image}
        imageClassName="object-cover w-full"
      />
      <span className="p-2 flex items-center w-full justify-center border-t border-black dark:border-white tracking-tighter">
        {name}, {title}
      </span>
    </div>
  );
};
export default ProfileCard;