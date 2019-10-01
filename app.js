const Koa = require('koa')
const InitManager = require('./core/init')
const errorCatcher = require('./middleware/errorCatcher')

const app = new Koa()
app.use(errorCatcher)
InitManager.init(app)


app.listen(8000, ()=>{
  console.log('listening')
})