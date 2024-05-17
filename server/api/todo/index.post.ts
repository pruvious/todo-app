import { pruviousReadBody, query } from '#pruvious/server'

export default defineEventHandler(async (event) => {
  return query('todo').create((await pruviousReadBody(event)) as any)
})
