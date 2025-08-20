# Weekly Demo

这是一个独立的 Astro 项目，包含了 weekly 项目的所有页面展示功能，专门用于样式优化和设计调整。

## 项目特点

- ✅ **完整的页面展示功能**：包含首页、博客列表、周刊列表、详情页等所有页面
- ✅ **独立运行**：不依赖数据库，使用 JSON 模拟数据
- ✅ **组件结构一致**：保持与原项目相同的组件位置和命名
- ✅ **样式完整**：包含完整的 Tailwind CSS 配置和自定义样式
- ✅ **简化依赖**：移除了 Sentry、数据库等非必需依赖
- ✅ **配置简化**：移除了 Astro 虚拟模块依赖，使用本地配置

## 快速开始

### 安装依赖
```bash
pnpm install
```

### 启动开发服务器
```bash
pnpm run dev
```

### 构建项目
```bash
pnpm run build
```

### 预览构建结果
```bash
pnpm run preview
```

## 项目结构

```
demo/
├── src/
│   ├── pages/           # 页面文件
│   │   ├── index.astro  # 首页
│   │   ├── blog/        # 博客相关页面
│   │   └── weekly/      # 周刊相关页面
│   ├── components/      # 组件文件
│   │   ├── common/      # 通用组件
│   │   ├── pages/       # 页面组件
│   │   ├── ui/          # UI 组件
│   │   └── widgets/     # 小部件组件
│   ├── layouts/         # 布局文件
│   ├── assets/          # 静态资源
│   ├── utils/           # 工具函数
│   ├── mock-data.json   # 模拟数据
│   └── config.ts        # 配置文件
├── package.json
├── astro.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 数据说明

项目使用 `src/mock-data.json` 文件提供模拟数据，包含：

- **博客文章**：示例博客文章数据
- **周刊内容**：示例周刊数据
- **站点配置**：基本站点信息

可以通过修改这个文件来调整展示的内容。

## 样式优化

这个 demo 项目特别适合用于：

1. **UI/UX 设计调整**：在 bolt.new 等平台进行界面优化
2. **样式实验**：测试新的设计方案
3. **组件开发**：开发新的 UI 组件
4. **响应式调试**：测试不同屏幕尺寸的显示效果

## 技术栈

- **框架**：Astro 5.x
- **样式**：Tailwind CSS
- **图标**：Tabler Icons
- **类型**：TypeScript
- **构建**：Vite

## 注意事项

- 这是一个纯展示项目，不包含后端功能
- 所有数据都是静态的模拟数据
- 适合用于前端样式开发和优化
- 与原项目保持相同的组件结构，便于样式迁移

## 开发建议

1. 修改样式时，主要关注 `src/assets/styles/tailwind.css` 和 `tailwind.config.ts`
2. 组件样式调整可以直接在对应的 `.astro` 文件中进行
3. 如需添加新的示例数据，可以编辑 `src/mock-data.json`
4. 保持组件结构不变，确保样式能够顺利迁移回原项目

## 故障排除

### 虚拟模块错误
如果遇到 `Cannot find module 'weekly:config'` 错误，说明某个文件仍在引用 Astro 虚拟模块。已修复的文件包括：
- `src/layouts/Layout.astro`
- `src/utils/utils.ts`
- `src/components/widgets/Footer.astro`
- `src/components/common/ToggleTheme.astro`
- `src/components/common/ApplyColorMode.astro`
- `src/components/common/Metadata.astro`
- `src/components/common/BasicScripts.astro`
- `src/components/Logo.astro`

### Node.js 版本
确保使用 Node.js 18.20.8 或更高版本：
```bash
node --version
# 如果版本过低，使用 nvm 切换
nvm use node
```

### 开发服务器启动问题
如果开发服务器无法启动，尝试：
```bash
# 清理依赖并重新安装
rm -rf node_modules pnpm-lock.yaml
pnpm install

# 或者使用 npm
rm -rf node_modules package-lock.json
npm install
```
