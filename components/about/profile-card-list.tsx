import { ProfileType } from "@/types";
import ProfileCard from "./profile-card";

interface ProfileCardListProps {
  data: ProfileType[];
}

const ProfileCardList = ({ data }: ProfileCardListProps) => {
  if (!data[0]) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {data &&
        data.map((item) => (
          <ProfileCard
            key={item.title}
            image={item.image}
            title={item.title as string}
            name={item.name}
          />
        ))}
    </div>
  );
};
export default ProfileCardList;