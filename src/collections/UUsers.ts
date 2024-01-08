import { isComponent } from 'payload/dist/admin/components/forms/FieldDescription/types'
import { CollectionConfig } from 'payload/types'

const UUsers: CollectionConfig = {
  slug: 'uusers',
  auth: true,
  admin: {
    useAsTitle: 'email',
    components : {
      
    }
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    
  ],
}

export default UUsers
