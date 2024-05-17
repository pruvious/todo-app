import { query } from '#pruvious/server'

export default defineEventHandler(async (event) => {
  return query('todo')
    .where('id', getRouterParam(event, 'id') as any)
    .delete()
})
