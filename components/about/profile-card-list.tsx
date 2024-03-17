import ProfileCard from "./profile-card";
import profile from "@/sanity/schemas/about/profile";

type user = typeof profile;
interface ProfileCardListProps {
  data: any;
}

const ProfileCardList = ({ data }: ProfileCardListProps) => {
  if (!data[0]) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {data &&
        data.map((item: user) => (
          <ProfileCard
            key={item.title}
            // @ts-ignore
            image={item.image}
            title={item.title as string}
            name={item.name}
          />
        ))}
    </div>
  );
};
export default ProfileCardList;
