import { defineConfig } from "vite";
import VueJSX from '@vitejs/plugin-vue-jsx'
import Unocss from '../config/unocss'
// https://vitejs.dev/config/

export default defineConfig({
    plugins: [
        VueJSX(),
        Unocss()
    ]
})