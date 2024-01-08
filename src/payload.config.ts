import path from 'path'
// import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

// import Users from './collections/Users'
import  Users from './collections/Users/index'
import customers from './collections/customers'
import { Home } from './collections/home'
import Connectors from './collections/connectors'
import Question from './collections/Questions'
import RealeaseNotes from './collections/RealeaseNotes'
import Features from './collections/Features'
import Pages from './collections/Pages'
import ContactUS from './collections/ContactUS'
import Integrations from './collections/Integrations'
import categories from './collections/categoryCode'
import Blogs from './collections/Blogs'
import Media from './collections/media'
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { azureBlobStorageAdapter } from '@payloadcms/plugin-cloud-storage/azure';
import { Privacy_policies } from './collections/Privacy_policies'
import { All_integrations } from './collections/All_Integrations'
import { Platform } from './collections/Platform'
import { About_us } from './collections/About_us'
import About_smartConx from './collections/About_samrtConx'
import Reviews from './collections/Reviews'
import Newsletter from './collections/NewsLetter'
import homePage from './collections/HomePage'
import { Menus } from './collections/menu'
import nestedDocs from '@payloadcms/plugin-nested-docs'
import config from './collections/Nested'
import Nav from './collections/Global'
import tabs from './collections/tabs'

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [ customers , Connectors , Question , RealeaseNotes , Blogs , Features , Pages , Integrations , categories , ContactUS, Media , Privacy_policies , All_integrations , Platform , About_us , About_smartConx , Reviews , Newsletter , homePage , Menus , tabs , Users],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    // Pass the plugin to Payload
    cloudStorage({
      collections: {
        media: {
          adapter: azureBlobStorageAdapter({
            connectionString: process.env.AZURE_STORAGE_CONNECTION_STRING,
            containerName: process.env.AZURE_STORAGE_CONTAINER_NAME,
            allowContainerCreate: process.env.AZURE_STORAGE_ALLOW_CONTAINER_CREATE === 'true',
            baseURL: process.env.AZURE_STORAGE_ACCOUNT_BASEURL,
          }),
        },
      },
    }),
    // nestedDocs({
    //   collections: ['pages'],
    //   generateLabel: (_, doc) => doc.title,
    //   generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
    // }),
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
