import { buildConfig } from 'payload/config'
import nestedDocs from '@payloadcms/plugin-nested-docs'
//@ts-ignore
const config = buildConfig({
  collections: [
    {
      slug: 'nested',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'slug',
          type: 'text',
        },
      ],
    },
  ],
  plugins: [
    nestedDocs({
      collections: ['nested'],
      generateLabel: (_, doc) => doc.title,
      generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
    }),
  ],
})

export default config