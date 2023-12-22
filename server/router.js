const Router = require('koa-router')
const standardRouter = require('./api/standard')
const multipleRouter = require('./api/multiple')

const router = new Router()
standardRouter(router)
multipleRouter(router)

module.exports = router
