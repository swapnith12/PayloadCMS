import { CollectionConfig } from 'payload/types';

export const Platform: CollectionConfig = {
    slug: 'Platform',
    fields:[
        {
            name:"Platform",
            type:"array",
            fields:[
              {name:"Title",type:"array",fields:[
                {name:"Primary",type:"text"},
                {name:"Secondary",type:"text"},
              ]},
              
            ]
          },
          {
            name: 'Hero_image',
            label: 'Image',
            type: 'upload',
            relationTo: 'media',
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
    ]
}

