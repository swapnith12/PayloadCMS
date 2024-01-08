import { isComponent } from 'payload/dist/admin/components/forms/FieldDescription/types'
import { CollectionConfig } from 'payload/types'

const ContactUS: CollectionConfig = {
  slug: 'ContactUS',
 
  fields: [
   {
    name: "Street", 
    type: "text"
   },
   {
    name: "Phone", 
    type: "number"
   },
   {
    name: "Email", 
    type: "text"
   },
  
  ],
}

export default ContactUS
