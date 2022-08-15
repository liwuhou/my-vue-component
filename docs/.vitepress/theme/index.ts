import Theme from 'vitepress/dist/client/theme-default'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import SmartyUI from '../../../src/entry'

export default {
    ...Theme,
    enhanceApp({ app }) {
        app.use(SmartyUI)
        app.use(Demo)
        app.use(DemoBlock)
    }
}