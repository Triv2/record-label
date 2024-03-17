import {defineField} from 'sanity'
import { SplitHorizontalIcon } from '@sanity/icons'

const header ={
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
      to: {type: 'musicVideo'},
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
};


export default header;