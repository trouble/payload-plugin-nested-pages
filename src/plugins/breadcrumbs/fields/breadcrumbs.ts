import { Field } from 'payload/types';
import deepMerge from '../../../utilities/deepMerge';

const createBreadcrumbsField = (overrides: Partial<Field> = {}): Field => deepMerge({
  name: 'breadcrumbs',
  type: 'array',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'url',
          label: 'URL',
          type: 'text',
          admin: {
            width: '50%',
          },
        },
        {
          name: 'label',
          type: 'text',
          admin: {
            width: '50%',
          },
        },
      ],
    },
  ],
  access: {
    create: () => false,
    update: () => false,
  },
  admin: {
    readOnly: true,
  },
}, overrides);

export default createBreadcrumbsField;