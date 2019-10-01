const KoaRouter = require('koa-router')
const router = new KoaRouter()

router.get('/blog', async (ctx, next) => {
  ctx.body = {
    'blog': "blog"
  }
  await next()
})

module.exports = {
  router
}