const Response = require('../utils/response')

function standardRouter(router) {
  router.get('/api/standard/list', (ctx) => {
    ctx.response.status = 200
    ctx.body = Response.json({ msg: 'success' })
  })
}

module.exports = standardRouter
