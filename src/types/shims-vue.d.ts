declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMeta {
  readonly env: ImportMetaEnv
  readonly glob: (
    pattern: string,
    options?: { eager?: boolean; import?: string },
  ) => Record<string, any>
}

interface ImportMetaEnv {
  [key: string]: string | boolean | undefined
}
