import { isComponent } from 'payload/dist/admin/components/forms/FieldDescription/types'
import { CollectionConfig } from 'payload/types'

const customers: CollectionConfig = {
  slug: 'customers',
 
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
    name: "description", 
    type: "textarea"
   },
   {
    name: "story_header", 
    type: "text"
   },
   {
    name: "Context", 
    type: "textarea"
   },
    
  ],
}

export default customers
