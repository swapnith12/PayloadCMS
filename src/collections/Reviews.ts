import { CollectionConfig } from 'payload/types'


const Reviews: CollectionConfig = {
  slug: 'Reviews',
  fields:[
{
  name: 'reviewsTitle',
  label: 'Reviews title',
  type: 'text',
},
{
  name: 'reviews',
  label: 'Reviews',
  type: 'array',
  fields: [
    {
      name: 'author',
      label: 'Author',
      type: 'array',
      fields: [
        {
          name: 'name',
          label: 'Name',
          type: 'text',
        },
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'role',
          label: 'Role',
          type: 'text',
        },
      ],
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
    {
      name: 'text',
      label: 'Text',
      type: 'text',
    },
  ],
},
  ]
}

export default Reviews