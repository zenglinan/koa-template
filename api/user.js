const KoaRouter = require('koa-router')
const router = new KoaRouter()

router.get('/user', async (ctx, next) => {
  ctx.body = {
    'user': "user"
  }
  await next()
})

module.exports = {
  router
}