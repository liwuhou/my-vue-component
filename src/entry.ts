import { App } from 'vue'
import MyButton from './button'
import SFCButton from './SFCButton/index.vue'
import JSXButton from './JSXButton'

// 单独导出组件
export { MyButton, SFCButton, JSXButton }

// 以插件的形式导出
export default {
    install(app: App): void {
        app.component(MyButton.name, MyButton)
        app.component(SFCButton.name, SFCButton)
        app.component(JSXButton.name, JSXButton)
    }
}