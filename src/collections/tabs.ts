import { GlobalConfig } from 'payload/types'
import {home} from '../Fields/home'
import { Content } from '../Blocks/Content'
//@ts-ignore
const tabs: GlobalConfig = {
  slug: 'tabs',
  fields: [
    {
        type: 'tabs',
        tabs: [
          {
            label: 'Home',
            fields: [home],
          },
          {
            label: 'Content',
            fields: [
              {
                name: 'layout',
                type: 'blocks',
                required: true,
                blocks: [Content],
              },
            ],
          },
        ]
    }
  ],
}

export default tabs