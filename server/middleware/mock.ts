import process from 'node:process'

export default defineEventHandler(async (event) => {
  const url = getRequestURL(event)
  if (process.env.NODE_ENV === 'development' && url && url.pathname.startsWith('/api')) {
    try {
      const path = url.pathname.replace('/api', '/mock')
      return await sendProxy(event, `http://localhost:${process.env.PORT || 3000}${path}`)
    }
    catch (error) {
      console.error('Mock proxy error:', error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Mock proxy error',
      })
    }
  }
})
