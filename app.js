const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const koaJwt = require('koa-jwt');
const router = require('./routes/index')
const config = require('./config/index')
onerror(app)

app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
app.use((ctx, next) => {
  return next().catch((err) => {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.body = 'UnAthoration to get the data';
    } else {
      throw err;
    }
  })
});
app.use(koaJwt({
  secret: config.secret
}).unless({
  path: [/\/login/, /\/register/]
}))
app.use(router.routes(), router.allowedMethods())
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
