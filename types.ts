import artist from "./sanity/schemas/artists/artist";
import social from "./sanity/schemas/artists/social";
import release from "./sanity/schemas/home/release";
import musicVideo from "./sanity/schemas/music-video";

export type ProfileType = {
  name: string;
  title: string;
  image: {
    alt: string;
    image: string;
  };
};

export type HeaderType = {
  _id: string;
  title: string;
  order: number;
  description: string;
  image: {
    alt: string;
    image: string;
  };
};

export type FooterType ={
  _id: string;
  socials:SocialType[];
}

export type MusicVideoType = {
  _id: string;
  songTitle: string;
  link: string;
  artist: typeof artist;
  thumbnail: {
    alt: string;
    image: string;
  };
  video: File;
};

export type ImprintType = {
  _id: string;
  name: string;
  telephone: string;
  title: string;
  address1: string;
  address2: string;
  address3: string;
  website: string;
  email: string;
  vatId: string;
  telephoneHours: string;
};

export type ArtistType = {
  _id: string;
  name: string;
  bio: string;
  image: {
    alt: string;
    image: string;
  };
  socials: (typeof social)[];
  releases: (typeof release)[];
  musicVideos: (typeof musicVideo)[];
};

export type ArtistDetailsType = {
  image: {
    alt: string;
    image: string;
  };
  name: string;
  bio: string;
  socials: SocialType[];
};

export type ArtistVideosType = {
  link: string;
  video: File;
};

export type ArtistReleasesType = {
  name: string;
  releases: (typeof release)[];
};

export type SocialType = {
  title: string;
  link: string;
  socialLink: string;
};

export type ReleaseType = {
  title: string;
  new?: boolean;
  mainImage: {
    alt: string;
    image: string;
  };
  artist: typeof artist;
  musicVideos: (typeof musicVideo)[];
  socials: (typeof social)[];
};

export type NewReleaseType = {
  title: string;
  mainImage: {
    alt: string;
    image: string;
  };
  artist: typeof artist;
};

export type PlaylistType = {
  title: string;
  image: {
    alt: string;
    image: string;
  };
  artist: typeof artist;
  socials: (typeof social)[];
};

export type StreamingPlaylistType = {
  title: string;
  image: {
    alt: string;
    image: string;
  };
};
