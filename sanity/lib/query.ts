import { groq } from "next-sanity";
import { client } from "./client";

export async function getProfiles() {
  return client.fetch(groq`*[_type == "profile"]`);
}

export async function getHeader(name: string) {
  return client.fetch(
    groq`*[_type == "header" && title == "${name}"]
    {
      musicVideo->{video, link, thumbnail},
      description
      }`
  );
}

export async function getImprint() {
  return client.fetch(groq`*[_type == "imprint"]`);
}

export async function getMusicVideos() {
  return client.fetch(
    groq`*[_type == "musicVideo"]
    {
      songTitle, 
      artist[]->{name}, 
      link, 
      video, 
      thumbnail, 
      file
      }`
  );
}

export async function getArtists() {
  return client.fetch(groq`*[_type == "artist"]`);
}

export async function getArtistDetails(name: string) {
  return client.fetch(
    groq`*[_type == "artist" && name == "${name}"]
    {
      image,
      name,
      bio,
      socials[]->
    }`
  );
}
export async function getArtistVideos(name: string) {
  return client.fetch(
    groq`*[_type == "artist" && name == "${name}"]
    {
      musicVideos[]->
      {
        link,
        thumbnail,
        video
        }
    }`
  );
}

export async function getArtistReleases(name: string) {
  return client.fetch(
    groq`*[_type == "artist" && name == "${name}"]
    {
      name,
      releases[]->
      }`
  );
}

export async function getRelease(name: string) {
  return client.fetch(
    groq`*[_type == "release" && title == "${name}"]
    {
      title,
      artist->{name},
      mainImage,
      socials[]->
    }`
  );
}

export async function getPlaylist(name: string) {
  return client.fetch(
    groq`*[_type == "playlist" && title == "${name}"]
    {
      title,
      image,
      socials[]->,
      artist->{name}
    }`
  );
}

export async function getNewReleases() {
  return client.fetch(
    groq`*[_type == "release" && new == true ]
    {
      title,
      artist->{name},
      mainImage
    }`
  );
}

export async function getStreamingPlaylists() {
  return client.fetch(
    groq`*[_type == "playlist" ]
    {
      title,
      image,
    }`
  );
}
export async function getFooter() {
  return client.fetch(
    groq`*[_type == 'artist' && name == 'Footer']
    {
      socials[]->
    }`
  );
}