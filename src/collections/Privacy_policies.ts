import { CollectionConfig } from 'payload/types';

export const Privacy_policies: CollectionConfig = {
    slug: 'Privacy_policies',
    fields:[
        {
            name:"Privacy_policies",
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
              {name:"questions",type:"array",fields:[
                {name:"question",type:"text"},
                {name:"answer",type:"text"}
              ]}
            ]
          },
    ]
}

