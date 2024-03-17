import {defineField, defineType} from 'sanity'
import { SplitHorizontalIcon } from '@sanity/icons'
export default defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  icon: SplitHorizontalIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    
    defineField({
      name: 'musicVideo',
      title: 'Music Video',
      type: 'reference',
      // @ts-ignore
      to: {type: 'musicVideo'},
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
      // @ts-ignore
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
   
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],
})
