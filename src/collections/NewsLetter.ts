import { CollectionConfig } from 'payload/types'


const Newsletter: CollectionConfig = {
  slug: 'Newsletter',
  fields:[
    {
        name: 'newsletter',
        label: 'Newsletter',
        type: 'array',
        fields: [
          {
            name: 'title',
            label: 'Title',
            type: 'text',
          },
          {
            name: 'text',
            label: 'Text',
            type: 'text',
          },
          {
            name: 'inputPlaceholder',
            label: 'Input placeholder',
            type: 'text',
          },
          {
            name: 'buttonText',
            label: 'Button text',
            type: 'text',
          },
        ],
      },
  ]
}

export default Newsletter