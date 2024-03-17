import { defineField, defineType } from "sanity";
import { StackIcon } from "@sanity/icons";
export default defineType({
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
      // @ts-ignore
      of: [{ type: "reference", to: { type: "social" } }],
    }),
    defineField({
      name: "artist",
      title: "Artist",
      type: "reference",
      // @ts-ignore
      to: { type: "artist" },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      // @ts-ignore
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
});
