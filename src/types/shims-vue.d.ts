declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.css' {
  const content: Record<string, any>
  export default content
}

declare module 'modern-normalize' {
  const content: any
  export default content
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
