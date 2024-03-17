import { defineField, defineType } from "sanity";
import { ShareIcon } from "@sanity/icons";
export default defineType({
  name: "social",
  title: "Social",
  type: "document",
  icon: ShareIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "artist",
      title: "Artist",
      type: "reference",
      // @ts-ignore
      to: { type: "artist" },
    }),
   
    defineField({
      title: "Social Links",
      name: "socialLink",
      type: "string",
      options: {
        list: [
          { title: "Spotify", value: "spotify" },
          { title: "Apple Music", value: "apple" },
          { title: "Tidal", value: "tidal" },
          { title: "Deezer", value: "deezer" },
          { title: "Instagram", value: "instagram" },
          { title: "TikTok", value: "tiktok" },
          { title: "Amazon", value: "amazon" },
          { title: "Youtube", value: "youtube" },
        ],
      },
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "string",
    }),

    
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
  ],
    initialValue: {
      socialLink: "spotify",
    }
  
});
