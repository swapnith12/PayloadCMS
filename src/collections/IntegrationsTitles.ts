import { CollectionConfig } from 'payload/types'


const Integrationstitle: CollectionConfig = {
  slug: 'Integrationstitle',
 
  fields: [{
    name: 'integrationsTitle',
    label: 'Integrations title',
    type: 'text',
  },
  {
    name: 'integrations',
    label: 'Integrations',
    type: 'array',
    fields: [
      {
        name: 'title',
        label: 'Title',
        type: 'text',
      },
      // {
      //   name: 'imageBackgroundColor',
      //   label: 'Image background color',
      //   type: 'text',
      //   validate: validateHexColor,
      //   required: true,
      // },
      {
        name: 'image',
        label: 'Image',
        type: 'upload',
        relationTo: 'media',
      },
      {
        name: 'description',
        label: 'Description',
        type: 'text',
      },
    ],
  },]
}

export default Integrationstitle