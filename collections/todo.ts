import { defineCollection } from '#pruvious'

export default defineCollection({
  name: 'todo',
  mode: 'multi',
  fields: {
    task: {
      type: 'text',
      options: {
        required: true,
      },
    },
  },
})
