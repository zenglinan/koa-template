const KoaRouter = require('koa-router')
const requireDirectory = require('require-directory')

class InitManager {
  static init(app){
    InitManager.app = app
    InitManager.initRouters()
  }

  static initRouters(){
    const apiDirectory = `${process.cwd()}/api`
    requireDirectory(module, apiDirectory, {
      visit: whenLoadModule
    })

    function whenLoadModule(exports){
      Object.keys(exports).forEach(k => {
        if(exports[k] instanceof KoaRouter){
          InitManager.app.use(exports[k].routes())
        }
      })
    }
  }
}
module.exports = InitManager