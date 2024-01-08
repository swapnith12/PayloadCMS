import { GlobalConfig } from 'payload/types'
//@ts-ignore
const Nav: GlobalConfig = {
  slug: 'nav',
  fields: [
    {
      name: 'items',
      type: 'array',
      required: true,
      maxRows: 8,
      fields: [
        {
          name: 'hero',
          type: 'relationship',
          relationTo: 'pages', // "pages" is the slug of an existing collection
          required: true,
        },
        {
            name: 'page',
            type: 'relationship',
            relationTo: 'pages', // "pages" is the slug of an existing collection
            required: true,
          },
      ],
    },
  ],
}

export default Nav