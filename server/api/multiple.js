const Response = require('../utils/response')

function multipleRouter(router) {
  router.get('/api/multiple/list', (ctx) => {
    ctx.response.status = 200
    ctx.body = Response.json({ msg: 'success' })
  })
}

module.exports = multipleRouter
