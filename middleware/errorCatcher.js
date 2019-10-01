const errorCatcher = async (ctx, next) => {
  try {
    await next()
  } catch (err){
    ctx.body = {
      'error': `服务器出错了: ${err}`
    }
  }
}

module.exports = errorCatcher