import { CollectionConfig } from 'payload/types'


const About_smartConx: CollectionConfig = {
  slug: 'About_smartConx',
  fields:[
    {
        name: 'about_content',
        label: 'About SmartConX',
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
            name: 'image',
            label: 'Image',
            type: 'upload',
            relationTo: 'media',
          },
          {
            name: 'moreButton',
            label: 'More button',
            type: 'text',
          },
        ],
      },
  ]
}

export default About_smartConx