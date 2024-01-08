import { CollectionConfig } from 'payload/types';

export const About_us: CollectionConfig = {
    slug: 'About_us',
    fields:[
        {
            name:"About_us",
            type:"array",
            fields:[
              {name:"Title",type:"text"},
              {name:"Hero_content",type:"array",
              fields:[
                {name:"image",type:"upload",relationTo:"media"},
                {name:"title",type:"text"},
                {name:"Text",type:"text"}
              ]},
              {name:"company_status",type:"array",fields:[
                {name:"title",type:"text"},
                {name:"text",type:"text"},
                {name:"count",type:"number"}
              ]},
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
          },
    ]
}

