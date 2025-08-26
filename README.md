<div align="center">
  <h1>🏋️‍♂️ CalifitPlanner</h1>
  <p><strong>Plataforma web integral para aprender, entrenar y crear rutinas de calistenia</strong></p>
  
  <p>
    <a href="https://github.com/AraceliDev/califitplanner">
      <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" alt="GitHub Repository" />
    </a>
    <a href="https://linear.app/califitplanner/project/califit-mvp-spring-1-894b8c9b448e/overview">
      <img src="https://img.shields.io/badge/Linear-Backlog-5E6AD2?style=for-the-badge&logo=linear" alt="Linear Backlog" />
    </a>
    <a href="https://www.figma.com/proto/GoFta96pD4GoC8te8cSpZm/califitplanner?t=Lsb5HMv77jqJq2hA-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=49-214&starting-point-node-id=49%3A214&show-proto-sidebar=1">
      <img src="https://img.shields.io/badge/Figma-Prototipo-F24E1E?style=for-the-badge&logo=figma" alt="Figma Prototype" />
    </a>
  </p>
  
  <p>
    <img src="https://img.shields.io/badge/Estado-En_Desarrollo-FFA500?style=flat-square" alt="Estado" />
    <img src="https://img.shields.io/badge/Licencia-MIT-green?style=flat-square" alt="Licencia" />
    <img src="https://img.shields.io/badge/Versión-MVP_1.0-blue?style=flat-square" alt="Versión" />
    <img src="https://img.shields.io/badge/Mantenido-Activamente-brightgreen?style=flat-square" alt="Mantenimiento" />
  </p>
  
  <hr />
</div>

## 🌟 **Descripción**

**CalifitPlanner** es una plataforma web moderna y completa diseñada para entusiastas de la calistenia de todos los niveles. Desde principiantes hasta atletas avanzados, nuestra plataforma ofrece las herramientas necesarias para aprender, planificar y ejecutar rutinas de entrenamiento efectivas.

### **✨ Características Principales**

<table>
<tr>
<td width="50%">

🏠 **Home Motivacional**
- Introducción inspiradora a la calistenia
- Testimonios y casos de éxito
- Call-to-action para comenzar el journey

💪 **Biblioteca de Ejercicios**
- Catálogo visual organizado por grupos musculares
- Instrucciones detalladas paso a paso
- Niveles de dificultad progresivos
- Videos demostrativos

🧩 **Creador de Rutinas**
- Interface drag & drop intuitiva
- Personalización por objetivos
- Timer integrado para entrenamientos
- Plantillas pre-diseñadas

</td>
<td width="50%">

👥 **Personas de Interés**
- Perfiles de atletas destacados
- Historias inspiracionales
- Técnicas y consejos de expertos

📚 **Centro de Recursos**
- Canales de YouTube curados
- eBooks descargables
- Comunidades recomendadas
- Artículos educativos

✍️ **Blog Especializado**
- Consejos de entrenamiento
- Nutrición deportiva
- Progresiones avanzadas
- Actualizaciones de la plataforma

</td>
</tr>
</table>

---

## 🚀 **Stack Tecnológico**

<div align="center">

### **Frontend**
<p>
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
</p>

### **Backend**
<p>
  <img src="https://img.shields.io/badge/Laravel-11.x-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel" />
  <img src="https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/MongoDB-7.0-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
</p>

### **DevOps & Tools**
<p>
  <img src="https://img.shields.io/badge/Docker-Latest-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
  <img src="https://img.shields.io/badge/ESLint-9.x-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
  <img src="https://img.shields.io/badge/Git-Version_Control-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
</p>

</div>

---

## 📦 **Estructura del Proyecto**

```
📦 califitplanner/
├── 📂 frontend/           # React + TypeScript + Vite
│   ├── 📂 src/
│   │   ├── 🧩 components/  # Componentes reutilizables
│   │   ├── 📄 pages/       # Páginas de la aplicación
│   │   ├── 🎨 styles/      # Estilos y temas
│   │   └── 🔧 utils/       # Utilidades y helpers
│   ├── 📄 package.json
│   └── ⚙️ vite.config.ts
├── 📂 backend/            # Laravel API
│   ├── 📂 app/
│   │   ├── 🎯 Http/        # Controllers y Middleware
│   │   ├── 📊 Models/      # Modelos de datos
│   │   └── 🔧 Services/    # Lógica de negocio
│   ├── 📂 database/
│   │   ├── 🗃️ migrations/  # Migraciones de BD
│   │   └── 🌱 seeders/     # Datos iniciales
│   └── 📄 composer.json
├── 🐳 docker-compose.yml  # Orquestación de servicios
├── 📄 .env.example        # Variables de entorno
└── 📚 README.md
```

---

## ⚙️ **Instalación y Setup**

### **Prerrequisitos**

- 🐋 [Docker](https://docs.docker.com/get-docker/) y Docker Compose
- 🌐 [Git](https://git-scm.com/downloads)
- 💻 Editor de código (VS Code recomendado)

### **🚀 Setup Rápido**

```bash
# 1. Clonar el repositorio
git clone https://github.com/AraceliDev/califitplanner.git
cd califitplanner

# 2. Configurar variables de entorno
cp .env.example .env
# Editar .env con tus configuraciones

# 3. Construir y ejecutar con Docker
docker-compose up -d --build

# 4. Acceder a la aplicación
echo "🎉 Frontend: http://localhost:3000"
echo "⚙️ Backend API: http://localhost:8000"
echo "🗃️ Mongo Express: http://localhost:8081"
echo "🐋 Portainer: http://localhost:9000"
```

### **🛠️ Setup para Desarrollo**

<details>
<summary><strong>📖 Ver instrucciones detalladas</strong></summary>

```bash
# Frontend
cd frontend
npm install
npm run dev

# Backend (nueva terminal)
cd backend
composer install
php artisan serve

# Base de datos
docker run -d -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=califit123 \
  --name califit_mongodb mongo:7.0
```

</details>

---

## 🎨 **Diseño y Branding**

### **Paleta de Colores "Amulet"**

<div align="center">

| Color | Hex | Preview | Uso |
|-------|-----|---------|-----|
| **Verde Principal** | `#819A72` | ![#819A72](https://via.placeholder.com/20/819A72/819A72.png) | Botones primarios, enlaces |
| **Verde Oscuro** | `#5d7a4f` | ![#5d7a4f](https://via.placeholder.com/20/5d7a4f/5d7a4f.png) | Hover states, énfasis |
| **Gris Texto** | `#141c12` | ![#141c12](https://via.placeholder.com/20/141c12/141c12.png) | Texto principal |
| **Gris Claro** | `#f4f7f2` | ![#f4f7f2](https://via.placeholder.com/20/f4f7f2/f4f7f2.png) | Fondos, cards |

</div>

### **Tipografía**
- **Títulos**: System fonts (Inter, San Francisco, Segoe UI)
- **Cuerpo**: Optimizada para legibilidad en dispositivos móviles
- **Código**: Monospace para elementos técnicos

---

## 📊 **Estado del Proyecto**

<div align="center">

### **🎯 MVP - Versión 1.0** *(En Desarrollo)*

| Módulo | Estado | Progreso |
|--------|--------|----------|
| 🏠 **Landing Page** | ✅ Completado | ![100%](https://progress-bar.dev/100?color=28a745) |
| 💪 **Biblioteca Ejercicios** | 🔄 En Progreso | ![75%](https://progress-bar.dev/75?color=ffc107) |
| 🧩 **Creador Rutinas** | 🔄 En Progreso | ![60%](https://progress-bar.dev/60?color=ffc107) |
| 👥 **Personas de Interés** | 📋 Planificado | ![25%](https://progress-bar.dev/25?color=dc3545) |
| 📚 **Centro Recursos** | 📋 Planificado | ![25%](https://progress-bar.dev/25?color=dc3545) |
| ✍️ **Blog** | 📋 Planificado | ![10%](https://progress-bar.dev/10?color=dc3545) |

</div>

---

## 🔗 **Enlaces Importantes**

<div align="center">

| 📎 Recurso | 🔗 Enlace | 📝 Descripción |
|------------|-----------|----------------|
| **🐙 Repositorio** | [GitHub](https://github.com/AraceliDev/califitplanner) | Código fuente principal |
| **📋 Gestión** | [Linear App](https://linear.app/califitplanner/project/califit-mvp-spring-1-894b8c9b448e/overview) | Backlog y gestión de tareas |
| **🎨 Diseño** | [Figma](https://www.figma.com/proto/GoFta96pD4GoC8te8cSpZm/califitplanner) | Prototipo interactivo |
| **🌐 Web** | [En Proceso](http://en-proceso) | Aplicación en producción |
| **🔧 Admin** | [En Proceso](http://en-proceso) | Panel administrativo |

</div>

---

## 📈 **Roadmap**

### **🎯 Fase 1 - MVP** *(Q1 2025)*
- ✅ Configuración inicial del proyecto
- ✅ Diseño UI/UX en Figma
- 🔄 Desarrollo de componentes base
- 🔄 API REST para ejercicios
- 📋 Sistema de rutinas básico

### **🚀 Fase 2 - Features Principales** *(Q2 2025)*
- 📋 Sistema de autenticación
- 📋 Dashboard personalizado
- 📋 Creador drag & drop avanzado
- 📋 Sistema de progreso
- 📋 Modo offline (PWA)

### **💫 Fase 3 - Mejoras UX** *(Q3 2025)*
- 📋 Comunidad y comentarios
- 📋 Notificaciones push
- 📋 Análisis de rendimiento
- 📋 Integración con wearables
- 📋 App móvil nativa

---

## 👥 **Equipo de Desarrollo**

<div align="center">

<table>
<tr>
<td align="center" width="150">
<img src="https://github.com/AraceliDev.png" width="100" style="border-radius: 50%;" alt="Araceli Pacheco"/>
<br />
<strong>Araceli Pacheco</strong>
<br />
<em>Full Stack Developer</em>
<br />
<a href="https://github.com/AraceliDev">GitHub</a>
</td>
<td width="400">
<strong>🚀 Responsabilidades:</strong>
<ul>
<li>🎯 Arquitectura y desarrollo full-stack</li>
<li>🎨 Diseño UI/UX e implementación</li>
<li>🗃️ Gestión de base de datos MongoDB</li>
<li>🐋 DevOps y despliegue con Docker</li>
<li>📊 Gestión de proyecto con metodología Scrum</li>
</ul>
</td>
</tr>
</table>

</div>

---

## 📊 **Metodología de Desarrollo**

### **🏃‍♀️ Scrum & Agile**
- **Sprints** de 2 semanas con [Linear App](https://linear.app/califitplanner/project/califit-mvp-spring-1-894b8c9b448e/overview)
- **Daily standups** para seguimiento continuo
- **Sprint reviews** con demos funcionales
- **Retrospectives** para mejora continua

### **🔧 Flujo de Trabajo**
```
📋 Backlog → 🔄 In Progress → 👀 Review → ✅ Done → 🚀 Deploy
```

### **📈 Métricas de Calidad**
- **Code Coverage**: Objetivo >80%
- **Performance**: Lighthouse Score >90
- **Accessibility**: WCAG 2.1 AA compliant
- **SEO**: Core Web Vitals optimized

---


### **📝 Convención de Commits**
Seguimos [Conventional Commits](https://www.conventionalcommits.org/):
```
feat: nueva funcionalidad
fix: corrección de bug
docs: documentación
style: formato (sin cambios de código)
refactor: refactorización
test: agregar tests
chore: mantenimiento
```


## 🙏 **Agradecimientos**

- 🏋️‍♀️ **Comunidad de Calistenia** por la inspiración
- 🎨 **Contribuidores de Open Source** por las herramientas
- 📚 **Documentación y Tutoriales** que hicieron posible este proyecto

---

<div align="center">
  <br />
  <p>
    <strong>🏋️‍♂️ Desarrollado con ❤️ para la comunidad de calistenia</strong>
  </p>
  <p>
    <a href="https://github.com/AraceliDev/califitplanner">
      <img src="https://img.shields.io/badge/⭐-Star_this_repo-yellow?style=for-the-badge" alt="Star this repo" />
    </a>
    <a href="https://github.com/AraceliDev/califitplanner/fork">
      <img src="https://img.shields.io/badge/🍴-Fork_this_repo-blue?style=for-the-badge" alt="Fork this repo" />
    </a>
  </p>
  <br />
  <p><strong>© 2025 CalifitPlanner - Todos los derechos reservados</strong></p>
  <p><em>Hecho con ❤️ y ☕ por <a href="https://github.com/AraceliDev">Araceli Pacheco</a></em></p>
</div>