<div align="center">
  <img src="https://img.shields.io/badge/CalifitPlanner-Frontend-green?style=for-the-badge&logo=react" alt="CalifitPlanner Frontend" />
  
  # 🏋️‍♂️ CalifitPlanner Frontend
  
  <p><strong>Plataforma web moderna para entusiastas de la calistenia</strong></p>
  
  <p>
    <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/ESLint-9.x-4B32C3?style=flat-square&logo=eslint" alt="ESLint" />
  </p>
  
  <p>
    <img src="https://img.shields.io/badge/Estado-En_Desarrollo-yellow?style=flat-square" alt="Estado" />
    <img src="https://img.shields.io/badge/Licencia-MIT-green?style=flat-square" alt="Licencia" />
    <img src="https://img.shields.io/badge/Mantenido-Sí-brightgreen?style=flat-square" alt="Mantenido" />
  </p>
  
  <hr />
</div>

## 🌟 **Descripción**

**CalifitPlanner Frontend** es la interfaz de usuario moderna y responsiva de nuestra plataforma de calistenia. Construida con las últimas tecnologías web, ofrece una experiencia fluida y atractiva para crear, explorar y gestionar rutinas de entrenamiento.

### **Características Principales**

- 🎯 **Interfaz Intuitiva** - Diseño limpio y fácil navegación
- 📱 **Totalmente Responsivo** - Optimizado para móviles, tablets y desktop
- ⚡ **Rendimiento Óptimo** - Carga rápida con Vite y React 18
- 🎨 **Diseño Moderno** - UI/UX profesional con Tailwind CSS
- 🔒 **Type-Safe** - Desarrollo robusto con TypeScript
- 🔥 **Hot Reload** - Desarrollo ágil con recarga instantánea

---

## 🚀 **Stack Tecnológico**

<div align="center">

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=white) | 18.3+ | Library principal |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) | 5.6+ | Tipado estático |
| ![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white) | 5.4+ | Build tool |
| ![Tailwind](https://img.shields.io/badge/-Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) | 3.4+ | Estilos |
| ![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white) | 9.x+ | Linting |

</div>

---

## 📁 **Estructura del Proyecto**

```
📦 frontend/
├── 📂 public/
│   ├── 🖼️ favicon.ico
│   └── 📄 index.html
├── 📂 src/
│   ├── 📂 assets/          # Recursos estáticos
│   │   ├── 🖼️ images/
│   │   ├── 🎨 icons/
│   │   └── 📄 fonts/
│   ├── 📂 components/      # Componentes reutilizables
│   │   ├── 🧩 ui/          # Componentes UI básicos
│   │   ├── 🏗️ layout/      # Layouts y estructura
│   │   ├── 🎴 forms/       # Formularios
│   │   └── 🎯 features/    # Componentes específicos
│   ├── 📂 hooks/          # Custom hooks
│   ├── 📂 services/       # Servicios y API calls
│   ├── 📂 stores/         # Estado global (Context/Zustand)
│   ├── 📂 styles/         # Estilos globales
│   ├── 📂 types/          # Definiciones TypeScript
│   ├── 📂 utils/          # Funciones utilitarias
│   ├── 📄 App.tsx         # Componente principal
│   ├── 📄 main.tsx        # Punto de entrada
│   └── 📄 vite-env.d.ts   # Tipos de Vite
├── 📄 .env.example        # Variables de entorno ejemplo
├── 📄 eslint.config.js    # Configuración ESLint
├── 📄 tailwind.config.js  # Configuración Tailwind
├── 📄 tsconfig.json       # Configuración TypeScript
├── 📄 vite.config.ts      # Configuración Vite
└── 📄 package.json        # Dependencias y scripts
```

---

## ⚙️ **Instalación y Configuración**

### **Prerrequisitos**

- ![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js) Node.js 18 o superior
- ![npm](https://img.shields.io/badge/npm-latest-CB3837?style=flat-square&logo=npm) npm, yarn, pnpm o bun

### **1. Clonar el repositorio**

```bash
git clone <tu-repositorio>
cd califitplanner/frontend
```

### **2. Instalar dependencias**

<div align="center">

| 📦 Gestor de Paquetes | 🚀 Comando |
|----------------------|-----------|
| ![npm](https://img.shields.io/badge/-npm-CB3837?style=flat-square&logo=npm&logoColor=white) | `npm install` |
| ![yarn](https://img.shields.io/badge/-yarn-2C8EBB?style=flat-square&logo=yarn&logoColor=white) | `yarn install` |
| ![pnpm](https://img.shields.io/badge/-pnpm-F69220?style=flat-square&logo=pnpm&logoColor=white) | `pnpm install` |
| ![bun](https://img.shields.io/badge/-bun-000000?style=flat-square&logo=bun&logoColor=white) | `bun install` |

</div>

### **3. Configurar variables de entorno**

```bash
cp .env.example .env
```

Edita el archivo `.env` con tus configuraciones:

```env
# API Backend
VITE_API_URL=http://localhost:8000/api

# Información de la App
VITE_APP_NAME=CalifitPlanner

# Configuración de desarrollo
VITE_DEBUG=true

# Features habilitados
VITE_FEATURE_AUTH=true

# Docker Hot Reload (mantener para Docker)
CHOKIDAR_USEPOLLING=true
```

---

## 🛠️ **Scripts Disponibles**

<div align="center">

| 🎯 Acción | 💻 npm | 🧶 yarn | 📦 pnpm | ⚡ bun |
|-----------|--------|----------|---------|-------|
| **Desarrollo** | `npm run dev` | `yarn dev` | `pnpm dev` | `bun run dev` |
| **Build** | `npm run build` | `yarn build` | `pnpm build` | `bun run build` |
| **Preview** | `npm run preview` | `yarn preview` | `pnpm preview` | `bun run preview` |
| **Linting** | `npm run lint` | `yarn lint` | `pnpm lint` | `bun run lint` |
| **Type Check** | `npm run type-check` | `yarn type-check` | `pnpm type-check` | `bun run type-check` |

</div>

### **🔥 Desarrollo**

```bash
npm run dev
```

La aplicación estará disponible en: **http://localhost:3000**

### **🏗️ Producción**

```bash
# Build para producción
npm run build

# Preview del build
npm run preview
```

---

## 🎨 **Personalización**

### **Paleta de Colores - Tema Calistenia**

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        // Paleta principal "Amulet"
        primary: {
          DEFAULT: '#819A72',
          50: '#f4f7f2',
          100: '#e6ebe0', 
          200: '#ccd7c3',
          300: '#a7ba9b',
          400: '#819a72',
          500: '#5d7a4f',
          600: '#46603b',
          700: '#384d2f',
          800: '#2d3e27',
          900: '#263321',
          950: '#141c12'
        },
        // Grises complementarios
        gray: {
          text: '#141c12',
          light: '#f4f7f2',
          medium: '#a7ba9b'
        }
      }
    }
  }
}
```

### **Componentes UI Personalizados**

```tsx
// Ejemplo: Botón con tema calistenia
const Button = ({ variant = 'primary', children, ...props }) => (
  <button 
    className={`
      px-6 py-3 rounded-lg font-medium transition-all duration-200
      ${variant === 'primary' 
        ? 'bg-primary hover:bg-primary-600 text-white' 
        : 'bg-gray-100 hover:bg-gray-200 text-gray-text'
      }
    `}
    {...props}
  >
    {children}
  </button>
)
```

---

## 🔧 **Configuración Avanzada**

### **ESLint Configuration**

```js
// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
)
```

### **Vite Configuration**

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      '@/utils': path.resolve(__dirname, './src/utils'),
    }
  },
  server: {
    port: 3000,
    host: true,
    watch: {
      usePolling: true
    }
  }
})
```

---

## 🧪 **Testing** (Próximamente)

```bash
# Unit Tests con Vitest
npm run test

# E2E Tests con Playwright  
npm run test:e2e

# Coverage Report
npm run test:coverage
```

---

## 📚 **Recursos y Documentación**

### **Tecnologías Principales**

- 📘 [**React Documentation**](https://react.dev) - Library principal
- 📙 [**TypeScript Handbook**](https://www.typescriptlang.org/docs/) - Tipado estático
- 📗 [**Vite Guide**](https://vitejs.dev/guide/) - Build tool
- 📕 [**Tailwind CSS**](https://tailwindcss.com/docs) - Framework CSS

### **Herramientas de Desarrollo**

- 🔍 [**ESLint Rules**](https://eslint.org/docs/rules/) - Linting
- 🎨 [**Prettier**](https://prettier.io/docs/en/) - Code formatting
- 📊 [**React DevTools**](https://chrome.google.com/webstore/detail/react-developer-tools) - Debugging

### **Diseño y UX**

- 🎨 [**Figma Prototype**](https://www.figma.com/proto/GoFta96pD4GoC8te8cSpZm/califitplanner) - Diseño actual
- 📐 [**Design System**](docs/design-system.md) - Guías de diseño
- 🎯 [**Component Library**](docs/components.md) - Biblioteca de componentes

---

## 🤝 **Contribución**

### **Flujo de Trabajo**

1. **Fork** del repositorio
2. **Crear** rama feature: `git checkout -b feature/nueva-funcionalidad`
3. **Commit** cambios: `git commit -m 'feat: agregar nueva funcionalidad'`
4. **Push** a la rama: `git push origin feature/nueva-funcionalidad`
5. **Crear** Pull Request

### **Convención de Commits**

```
feat: nueva funcionalidad
fix: correción de bug
docs: actualización de documentación
style: cambios de formato (sin afectar código)
refactor: refactorización de código
test: agregar o modificar tests
chore: tareas de mantenimiento
```

### **Code Style**

- ✅ Usar TypeScript para todo el código
- ✅ Seguir las reglas de ESLint configuradas
- ✅ Componentes funcionales con hooks
- ✅ Props interfaces definidas
- ✅ Nombres descriptivos en inglés

---

## 🚀 **Roadmap**

### **v1.0 - MVP** *(Actual)*
- ✅ Configuración inicial con React + Vite
- ✅ Sistema de rutas básico
- ✅ Componentes UI fundamentales
- ✅ Integración con API backend
- 🔄 Páginas principales (Home, Ejercicios, Rutinas)

### **v1.1 - Mejoras UX**
- 🔲 Sistema de autenticación
- 🔲 Dashboard de usuario
- 🔲 Creador de rutinas drag & drop
- 🔲 Biblioteca de ejercicios avanzada

### **v1.2 - Features Avanzadas**
- 🔲 Progressive Web App (PWA)
- 🔲 Modo offline
- 🔲 Push notifications
- 🔲 Análisis de progreso

---

## 📞 **Soporte**

¿Tienes preguntas o problemas? 

- 📧 **Email**: [contacto@califitplanner.com](mailto:contacto@califitplanner.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/tu-usuario/califitplanner/issues)
- 💬 **Discusiones**: [GitHub Discussions](https://github.com/tu-usuario/califitplanner/discussions)

---

## 📄 **Licencia**

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](../LICENSE) para detalles.

---

<div align="center">
  <br />
  <p>
    <strong>🏋️‍♂️ Desarrollado con ❤️ para la comunidad de calistenia</strong>
  </p>
  <p>
    <img src="https://img.shields.io/badge/Hecho_con-❤️_y_☕-red?style=flat-square" alt="Made with love and coffee" />
  </p>
  <p>
    <strong>© 2025 CalifitPlanner - Todos los derechos reservados</strong>
  </p>
  <br />
</div>hooks': path.resolve(__dirname, './src/hooks'),
      '@/utils': path.resolve(__dirname, './src/utils'),
    }
  },
  server: {
    port: 3000,
    host: true,
    watch: {
      usePolling: true
    }
  }
})
```

---

## 🧪 **Testing** (Próximamente)

```bash
# Unit Tests con Vitest
npm run test

# E2E Tests con Playwright  
npm run test:e2e

# Coverage Report
npm run test:coverage
```

---

## 📚 **Recursos y Documentación**

### **Tecnologías Principales**

- 📘 [**React Documentation**](https://react.dev) - Library principal
- 📙 [**TypeScript Handbook**](https://www.typescriptlang.org/docs/) - Tipado estático
- 📗 [**Vite Guide**](https://vitejs.dev/guide/) - Build tool
- 📕 [**Tailwind CSS**](https://tailwindcss.com/docs) - Framework CSS

### **Herramientas de Desarrollo**

- 🔍 [**ESLint Rules**](https://eslint.org/docs/rules/) - Linting
- 🎨 [**Prettier**](https://prettier.io/docs/en/) - Code formatting
- 📊 [**React DevTools**](https://chrome.google.com/webstore/detail/react-developer-tools) - Debugging

### **Diseño y UX**

- 🎨 [**Figma Prototype**](https://www.figma.com/proto/GoFta96pD4GoC8te8cSpZm/califitplanner) - Diseño actual
- 📐 [**Design System**](docs/design-system.md) - Guías de diseño
- 🎯 [**Component Library**](docs/components.md) - Biblioteca de componentes

---


### **Convención de Commits**

```
feat: nueva funcionalidad
fix: correción de bug
docs: actualización de documentación
style: cambios de formato (sin afectar código)
refactor: refactorización de código
test: agregar o modificar tests
chore: tareas de mantenimiento
```

### **Code Style**

- ✅ Usar TypeScript para todo el código
- ✅ Seguir las reglas de ESLint configuradas
- ✅ Componentes funcionales con hooks
- ✅ Props interfaces definidas
- ✅ Nombres descriptivos en inglés

---

## 🚀 **Roadmap**

### **v1.0 - MVP** *(Actual)*
- ✅ Configuración inicial con React + Vite
- ✅ Sistema de rutas básico
- ✅ Componentes UI fundamentales
- ✅ Integración con API backend
- 🔄 Páginas principales (Home, Ejercicios, Rutinas)

### **v1.1 - Mejoras UX**
- 🔲 Sistema de autenticación
- 🔲 Dashboard de usuario
- 🔲 Creador de rutinas drag & drop
- 🔲 Biblioteca de ejercicios avanzada

### **v1.2 - Features Avanzadas**
- 🔲 Progressive Web App (PWA)
- 🔲 Modo offline
- 🔲 Push notifications
- 🔲 Análisis de progreso


<div align="center">
  <br />
  <p>
    <strong>🏋️‍♂️ Desarrollado con ❤️ para la comunidad de calistenia</strong>
  </p>
  <p>
    <img src="https://img.shields.io/badge/Hecho_con-❤️_y_☕-red?style=flat-square" alt="Made with love and coffee" />
  </p>
  <p>
    <strong>© 2025 CalifitPlanner - Todos los derechos reservados</strong>
  </p>
  <br />
</div>
