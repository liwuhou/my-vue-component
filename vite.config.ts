/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from './config/unocss'
import { resolve, dirname } from 'node:path'
import { fileURLToPath} from 'node:url'

const currFilePath = dirname(fileURLToPath(import.meta.url))

const rollupOptions = {
    external: ['vue', 'vue-router'],
    output: {
        globals: {
            vue: 'vue'
        }
    }
}

export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        Unocss(),
    ],
    // https://vitejs.dev/config/
    test: {
        globals: true,
        environment: 'happy-dom',
        transformMode: {
            web: [/.[tj]sx$/]
        }
    },
    resolve: {
        alias: {
            '@': resolve(currFilePath, 'src'),
            '@utils': resolve(currFilePath, 'src/utils'),
            '@test': resolve(currFilePath, 'src/utils/test')
        }
    },
    build: {
        rollupOptions,
        minify: false,
        lib: {
            entry: './src/entry.ts',
            name: 'SmartyUI',
            fileName: 'smarty-ui',
            // 导出模块格式
            formats: ['es', 'umd', 'iife', 'cjs']
        }
    }
})