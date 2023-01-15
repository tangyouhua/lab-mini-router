import RouterLink from './RouterLink'
import RouterView from './RouterView'

export function createRouter(options) {
    // router实例
    const router = {
        install(app) {
            const router = this

            // 1.注册两个全局组件
            app.component('RouterLink', RouterLink)
            app.component('RouterView', RouterView)

            // 2.注册$router
            app.config.globalProperties.$router = router
        }
    }
    return router
}