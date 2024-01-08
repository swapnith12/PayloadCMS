import { isComponent } from 'payload/dist/admin/components/forms/FieldDescription/types'
import { CollectionConfig } from 'payload/types'

const Question: CollectionConfig = {
  slug: 'Questions',
 
  fields: [
   {
    name: "Question", 
    type: "text"
   },
   {
    name: "Answer", 
    type: "textarea"
   },
   
   {
    name: 'owners', 
    type: 'relationship', 
    relationTo: ['connectors']
   },
   
  ],
}

export default Question
