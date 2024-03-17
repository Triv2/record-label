import artist from "@/sanity/schemas/artists/artist";
import Artist from "./artist";

type art = typeof artist;
interface ArtistListProps {
  data: any;
}

const ArtistList = ({ data }: ArtistListProps) => {
  if (!data[0]) return null;
  return (
    <div className="grid grid-cols-1  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 h-auto w-auto">
      {data.map((artist: art) => (
        // @ts-ignore
        <Artist key={artist.name} name={artist.name} image={artist.image} />
      ))}
    </div>
  );
};
export default ArtistList;
