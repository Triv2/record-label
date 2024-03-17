import {defineField, defineType} from 'sanity'
import { PublishIcon } from '@sanity/icons'
export default defineType({
  name: 'release',
  title: 'Release',
  type: 'document',
  icon: PublishIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'new',
      title: 'New?',
      type: 'boolean',
    }),
    defineField({
      name: 'artist',
      title: 'Artist',
      type: 'reference',
      // @ts-ignore
      to: {type: 'artist'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true 
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
      name: 'musicVideos',
      title: 'Music Videos',
      type: 'array',
      // @ts-ignore
      of: [{type: 'reference', to: {type: 'musicVideo'}}],
    }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      // @ts-ignore
      of: [{type: 'reference', to: {type: 'social'}}],
    }),
  
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    
  ],

  
})
