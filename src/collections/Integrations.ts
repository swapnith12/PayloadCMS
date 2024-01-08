import { isComponent } from 'payload/dist/admin/components/forms/FieldDescription/types'
import { CollectionConfig } from 'payload/types'
import Media from './media'

const Integrations: CollectionConfig = {
  slug: 'Integrations',
 
  fields: [
   {
    name: "Title", 
    type: "text"
   },
   {
    name: "image", 
    type : "upload",
    relationTo : "media",
    required : true
   },
   {
    name: "description", 
    type: "textarea"
   },
   {
    name: 'owners', 
    type: 'relationship', 
    relationTo: ['connectors']
   },
   
  ],
}

export default Integrations
