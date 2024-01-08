import { CollectionConfig } from 'payload/types';

export const All_integrations: CollectionConfig = {
    slug: 'All_integrations',
    fields:[
        {
            name:"All_integrations",
            type:"array",
            fields:[
              {name:"title",type:"text"},
              {name:"description",type:"textarea"}
            ]
          },
          {
            name:"Integrations",
            type:"array",
            fields:[
              {name:"title",type:"text"},
              {name:"description",type:"textarea"},
              {
                name: 'Hero_image',
                label: 'Image',
                type: 'upload',
                relationTo: 'media',
              },
              {name:"content",type:"textarea"}
            ]
          },
    ]
}

