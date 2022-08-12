import { App } from 'vue'
import SButton from './button'
import SFCButton from './SFCButton/index.vue'
import JSXButton from './JSXButton'

// 单独导出组件
export { SButton, SFCButton, JSXButton }

// 以插件的形式导出
export default {
    install(app: App): void {
        app
            .component(SButton.name, SButton)
            .component(SFCButton.name, SFCButton)
            .component(JSXButton.name, JSXButton)
    }
}