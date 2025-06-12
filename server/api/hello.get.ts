export default defineEventHandler(() => {
  return {
    code: 200,
    data: {
      message: 'Hello, World!',
      timestamp: new Date().toISOString(),
    },
  }
})
