import { CollectionConfig } from 'payload/types';

export const Home: CollectionConfig = {
  slug: 'home',
  fields: [
    {
      name : "Home",
      type: "text"
    },
    {
      name: 'navbar',
      type: 'group',
      fields: [
        {
          name: 'menu',
          type: 'array',
          fields: [
            { name: 'label', type: 'text' },
            { name: 'link', type: 'text' },
          ],
        },
      ],
    },
   
  ],
};
