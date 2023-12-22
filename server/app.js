const Koa = require('koa')
const helmet = require('koa-helmet')
const morgan = require('koa-morgan')
const bodyParser = require('koa-bodyparser')
const { Nuxt, Builder } = require('nuxt')
const config = require('../nuxt.config.js')
const router = require('./router')

const app = new Koa()

// Import and Set Nuxt.js options
config.dev = app.env !== 'production'

function useMiddleware() {
  app.use(morgan('combined'))
  app.use(
    helmet({
      contentSecurityPolicy: false,
    })
  )
  app.use(bodyParser())
}

function listen(port, host) {
  // 服务端监听
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  })
}

async function start() {
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  app.use(router.routes()).use(router.allowedMethods())

  useMiddleware()

  await nuxt.ready()
  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })
  listen(port, host)
}

start()
