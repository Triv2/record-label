import { defineField } from "sanity";
import { StackIcon } from "@sanity/icons";

const playlist ={
  name: "playlist",
  title: "Playlist",
  type: "document",
  icon: StackIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "socials",
      title: "Socials - ADD AFTER PUBLISHING ARTIST",
      type: "array",
      of: [{ type: "reference", to: { type: "social" } }],
    }),
    defineField({
      name: "artist",
      title: "Artist",
      type: "reference",
      to: { type: "artist" },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
  ],
};


export default playlist;