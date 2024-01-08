import { isComponent } from 'payload/dist/admin/components/forms/FieldDescription/types'
import { CollectionConfig } from 'payload/types'

const categories: CollectionConfig = {
  slug: 'categories',
 
  fields: [
   {
    name: "name", 
    type: "text"
   },
   {
    name: "image", 
    type: "textarea"
   },
   {
    name: "description", 
    type: "textarea"
   },
   {
    name: "content", 
    type: "textarea"
   },
   {
    name: "integrations", 
    type: "text"
   },
   {
    name: "Publish", 
    type: "checkbox"
   },
  ],
}

export default categories
