import { isComponent } from 'payload/dist/admin/components/forms/FieldDescription/types'
import { CollectionConfig } from 'payload/types'

const Connectors: CollectionConfig = {
  slug: 'connectors',
 
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
    name: "content", 
    type: "array",
    label : "content",
    fields : [
      {name:"Top",type:"checkbox"},
      {name:"Integrations",type:"array",label:"Integrations",fields:[
        {name:"title",type:"array",label:"title",fields:[
          {name:"title1",type:"text"},
          {name:"title2",type:"text"}
        ]}
      ]}
    ]
   },
   {
    name: "Publish", 
    type: "checkbox"
   },
  ],
}

export default Connectors
