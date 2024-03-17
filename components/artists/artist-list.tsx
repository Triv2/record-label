
import Artist from "./artist";
import { ArtistType } from "@/types";

interface ArtistListProps {
  data: ArtistType[];
}

const ArtistList = ({ data }: ArtistListProps) => {
  if (!data[0]) return null;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 h-auto w-auto">
      {data.map((artist) => (
        <Artist key={artist.name} name={artist.name} image={artist.image} />
      ))}
    </div>
  );
};
export default ArtistList;