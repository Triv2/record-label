import {defineField, defineType} from 'sanity'
import { PlayIcon } from '@sanity/icons'

export default defineType({
  name: 'musicVideo',
  title: 'Music Video',
  type: 'document',
  icon: PlayIcon,
  fields: [
    
    defineField({
      name: 'songTitle',
      title: 'Song Title',
      type: 'string',
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
      name: 'file',
      title: 'Use File?',
      type: 'boolean',
    }),
    
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file',
    }),
    
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
    defineField({
      name: 'artist',
      title: 'Artist',
      type: 'array',
      // @ts-ignore
      of: [{type: 'reference', to: {type: 'artist'}}],
    }),

  ],
  
})
