declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<null, null>
  export default component
}
