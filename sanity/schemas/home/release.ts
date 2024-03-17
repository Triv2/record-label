import {defineField} from 'sanity'
import { PublishIcon } from '@sanity/icons'

const release ={
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
      to: {type: 'artist'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true 
      },
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
      of: [{type: 'reference', to: {type: 'musicVideo'}}],
    }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{type: 'reference', to: {type: 'social'}}],
    }),
  
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    
  ],

  
};

export default release;