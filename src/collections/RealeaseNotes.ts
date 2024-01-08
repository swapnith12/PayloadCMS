import { isComponent } from 'payload/dist/admin/components/forms/FieldDescription/types'
import { CollectionConfig } from 'payload/types'

const RealeaseNotes: CollectionConfig = {
  slug: 'RealeaseNotes',
 
  fields: [
   {
    name: "Title", 
    type: "text"
   },
   {
    name: "RealeaseDate", 
    type: "text"
   },
   {
    name: "Realease_notes_context", 
    type: "textarea"
   }
  ],
}

export default RealeaseNotes
