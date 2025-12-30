// 优化后的 dynamicImport.ts
interface ComponentModule {
  default: {
    name?: string;
    [key: string]: any;
  };
}

interface ProcessedComponent {
  name: string;
  component: any;
}

// 缓存处理后的组件，避免重复处理
let processedPagesCache: Map<string, ProcessedComponent> | null = null;

function initializeComponents(): Map<string, ProcessedComponent> {
  if (processedPagesCache) {
    return processedPagesCache;
  }

  // 动态导入 views 目录下的所有 Vue 文件
  const pages = import.meta.glob('/src/views/**/*.vue', { eager: true }) as Record<string, ComponentModule>;

  processedPagesCache = new Map();

  Object.entries(pages).forEach(([key, module]) => {
    const component = module.default;
    const fileName = component.name || key.split('/').at(-2);

    if (fileName) {
      processedPagesCache!.set(fileName, { name: fileName, component });
    } else {
      console.warn(`Component at ${key} does not have a name defined`);
    }
  });

  return processedPagesCache;
}

function dynamicImport(templateName: string): any {
  const processedPages = initializeComponents();
  const component = processedPages.get(templateName);

  if (component) {
    return component.component;
  }

  // 错误处理
  console.error(`Template "${templateName}" not found. Available templates:`, Array.from(processedPages.keys()));
  return null;
}

export default dynamicImport;
