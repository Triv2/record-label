import { type SchemaTypeDefinition } from "sanity";

import artist from "./schemas/artists/artist";
import musicVideo from "./schemas/music-video";
import profile from "./schemas/about/profile";
import release from "./schemas/home/release";
import playlist from "./schemas/home/playlist";
import header from "./schemas/home/header";
import social from "./schemas/artists/social";
import imprint from "./schemas/imprint";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [header, release, artist, social, musicVideo, playlist, profile, imprint],
};