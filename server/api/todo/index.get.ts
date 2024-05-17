import { query } from '#pruvious/server'

export default defineEventHandler(() => {
  return query('todo').order('createdAt', 'desc').all()
})
