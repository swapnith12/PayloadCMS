import { CollectionConfig } from 'payload/types'

const homePage: CollectionConfig = {
   slug: 'home-page',
   fields: [
    {
      name: 'homepage',
      label: 'Home Page',
      type: 'array',
      //path
      fields: [
        {
          name: 'hero',
          label: 'Hero',
          type: 'array',
          fields: [
            {
              name: 'title',
              label: 'Title',
              type: 'array',
              fields: [
                {
                  name: 'primary',
                  label: 'Primary',
                  type: 'text',
                  admin: {
                    position: 'sidebar',
                  },
                },
                {
                  name: 'secondary',
                  label: 'Secondary',
                  type: 'text',
                  admin: {
                    position: 'sidebar',
                  },
                },
              ],
            },
            {
              name: 'heroImage',
              label: 'Hero image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'description',
              label: 'Description',
              type: 'text',
            },
            {
              name: 'buttons',
              label: 'Buttons',
              type: 'array',
              fields: [
                {
                  name: 'primary',
                  label: 'Primary button title',
                  type: 'text',
                },
                {
                  name: 'secondary',
                  label: 'Secondary button title',
                  type: 'text',
                },
                {
                  name: 'third',
                  label: 'Third button title',
                  type: 'text',
                },
              ],
            },
          ],
        }
      ]
    }
   ]
}

export default homePage