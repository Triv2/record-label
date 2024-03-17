import {defineField} from 'sanity'
import {PresentationIcon } from '@sanity/icons'

const artist ={
  name: 'artist',
  title: 'Artist',
  type: 'document',
  icon: PresentationIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
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
      name: 'bio',
      title: 'Bio',
      type: 'text',
   
    }),
    defineField({
      name: 'socials',
      title: 'Socials - ADD AFTER PUBLISHING ARTIST',
      type: 'array',
      of: [{type: 'reference', to: {type: 'social'}}],
    }),
    defineField({
      name: 'musicVideos',
      title: 'Music Videos - ADD AFTER PUBLISHING ARTIST',
      type: 'array',
      of: [{type: 'reference', to: {type: 'musicVideo'}}],
    }),
    defineField({
      name: 'releases',
      title: 'Releases - ADD AFTER PUBLISHING ARTIST',
      type: 'array',
      of: [{type: 'reference', to: {type: 'release'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],
  
};

export default artist;