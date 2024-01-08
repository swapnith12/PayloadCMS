import { text } from 'express'
import { isComponent } from 'payload/dist/admin/components/forms/FieldDescription/types'
import { CollectionConfig } from 'payload/types'

const Blogs: CollectionConfig = {
  slug: 'blogs',
 
  fields: [
   {
    name: "Title", 
    type: "text"
   },
   {
    name: "hero_image", 
    type: 'upload',
    relationTo: 'media',
    required: true,
   },
   {
    name: "Author", 
    type: "text"
   },
   {
    name: "content", 
    type: "array",
    label : "content",
    minRows: 2,
    maxRows: 10,
    fields: [
      // required
      {
        name: 'title',
        type: 'json',
      },
      {
        name: 'image',
        type: 'upload',
        relationTo: 'media',
        required: true,
      },
      {
        name: 'caption',
        type: 'array',
        label : 'caption',
        fields :[{name:"title",type:"text"}]
      },
    ],
   },
   {
    name: 'Tags',
    type: 'array',
    label : 'caption',
    fields :[{name:"title",type:"text"}]
  },
  ],
}

export default Blogs
