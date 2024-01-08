import { CollectionConfig } from 'payload/types';

export const validateHexColor = (value: string): boolean | string => {
  return value.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/).length === 1 || `${value} is not a valid hex color`;
}
const pagesCollection: CollectionConfig = {
  slug: 'pages',
  // label: 'Pages',  
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
        },
        {
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
        },
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
        {
          name: 'reviewsTitle',
          label: 'Reviews title',
          type: 'text',
        },
        {
          name: 'reviews',
          label: 'Reviews',
          type: 'array',
          fields: [
            {
              name: 'author',
              label: 'Author',
              type: 'array',
              fields: [
                {
                  name: 'name',
                  label: 'Name',
                  type: 'text',
                },
                {
                  name: 'image',
                  label: 'Image',
                  type: 'upload',
                  relationTo: 'media',
                },
                {
                  name: 'role',
                  label: 'Role',
                  type: 'text',
                },
              ],
            },
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
          ],
        },
      ],
    },
    {
      name:"About_us",
      type:"array",
      fields:[
        {name:"Title",type:"text"},
        {name:"Hero_content",type:"array",
        fields:[
          {name:"image",type:"upload",relationTo:"media"},
          {name:"title",type:"text"},
          {name:"Text",type:"text"}
        ]},
        {name:"company_status",type:"array",fields:[
          {name:"title",type:"text"},
          {name:"text",type:"text"},
          {name:"count",type:"number"}
        ]},
        {
          name: "content", 
          type: "array",
          label : "content",
          fields : [
            {name:"Top",type:"checkbox"},
            {name:"Integrations",type:"array",label:"Integrations",fields:[
              {name:"title",type:"array",label:"title",fields:[
                {name:"title1",type:"text"},
                {name:"title2",type:"text"}
              ]}
            ]}
          ]
         },
      ]
    },
    {
      name:"Platform",
      type:"array",
      fields:[
        {name:"Title",type:"array",fields:[
          {name:"Primary",type:"text"},
          {name:"Secondary",type:"text"},
        ]},
        
      ]
    },
    {
      name: 'Hero_image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: "content", 
      type: "array",
      label : "content",
      fields : [
        {name:"Top",type:"checkbox"},
        {name:"Integrations",type:"array",label:"Integrations",fields:[
          {name:"title",type:"array",label:"title",fields:[
            {name:"title1",type:"text"},
            {name:"title2",type:"text"}
          ]}
        ]}
      ]
     },
    {
      name:"All_integrations",
      type:"array",
      fields:[
        {name:"title",type:"text"},
        {name:"description",type:"textarea"}
      ]
    },
    {
      name:"Integrations",
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
        {name:"content",type:"textarea"}
      ]
    },
    {
      name:"Contact_us",
      type:"array",
      fields:[
        {name:"title",type:"text"},
        {name:"description",type:"textarea"},
      ]
    },
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
  ],
};

export default pagesCollection;
