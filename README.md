# Portafolio Personal de Enrique Ríos Flores

> **Arquitectura:** Aplicación web monorepo basada en Next.js (frontend) y servicios serverless (backend) para IA.

Este proyecto está organizado en dos capas principales:

1. **Frontend** (`src/app` + `src/once-ui`):
   - Construido con **Next.js 14** y **React** (client components y server components).
   - **UI** implementada con componentes reutilizables de **Once UI** (React + SCSS Modules).
   - **Estilos** gestionados con Sass y CSS Modules para encapsular estilos por componente.
   - **Optimización de imágenes** mediante el componente `Image` de Next.js (lazy-loading, `priority`, `quality=100`).

2. **Backend / Services** (`src/services` + API routes):
   - ChatBot potenciado por **OpenRouterService**, que orquesta las llamadas a la API de OpenAI.
   - No requiere servidor dedicado: usa **API Routes** de Next.js o despliegue serverless en Vercel.
   - Manejo de historial de conversaciones y throttling básico en el cliente.

---

## 🚀 Stack Tecnológico

| Capa       | Tecnología                          |
| ---------- | ----------------------------------- |
| Framework  | Next.js 14 (App Router, SSR/SSG)    |
| Lenguaje   | TypeScript                          |
| UI         | React (Client / Server components)  |
| Componentes| Once UI (SCSS Modules)              |
| Estilos    | Sass, CSS Modules                   |
| Icons      | React Icons (Heroicons, Font Awesome)|
| Imágenes   | `next/image`                        |
| ChatBot    | OpenRouterService / OpenAI API      |
| Despliegue | Vercel (Serverless Functions/API)   |

---

## 🏗️ Backend

Este backend API inteligente está diseñado para ser la columna vertebral de un portafolio personal/profesional que utiliza búsqueda semántica con IA para encontrar información relevante en documentos Markdown almacenados en la nube.

**Arquitectura y Tecnologías**

- **Core Framework**: FastAPI (Python 3.12+), Uvicorn ASGI, UV (gestor de paquetes).
- **IA y ML**: OpenAI Embeddings (text-embedding-3-small), LangChain, FAISS, Semantic Search.
- **Almacenamiento**: Amazon S3 para archivos Markdown, JSON para metadatos, índice vectorial local.
- **DevOps**: Docker para containerización, CORS configurado para integración con el frontend.

**Funcionalidades principales**

1. Procesamiento inteligente de documentos (chunking optimizado y generación de embeddings).
2. API de búsqueda semántica con endpoints RESTful para consultas en lenguaje natural.
3. Sistema de caché inteligente (hash-based caching, actualizaciones incrementales, almacenamiento persistente del índice).

**Estructura del proyecto**

```
portfolio-backend/
├── app/
│   ├── main.py
│   ├── embeddings_maker.py
│   └── ...
├── Dockerfile
├── requirements.txt
└── README.md
```

**Flujo de trabajo**

1. **Ingesta**: Archivos `.md` se almacenan en S3.
2. **Procesamiento**: `embeddings_maker.py` convierte el contenido en vectores.
3. **Indexación**: FAISS crea un índice buscable.
4. **API**: FastAPI expone endpoints para búsquedas semánticas.
5. **Frontend**: Consume la API para mostrar resultados y respuestas en la interfaz de usuario.

**Configuración**

Variables de entorno necesarias:

- `OPENAI_API_KEY` para generar embeddings.
- `S3_ACCESS_KEY` / `S3_SECRET_KEY` para acceso a S3.
- Parámetros de chunking, umbrales de similaridad y configuraciones adicionales.

**Caso de uso**

Los visitantes pueden hacer preguntas en lenguaje natural sobre proyectos y documentos, y obtener respuestas contextuales basadas en la similaridad semántica, incluso si no se mencionan explícitamente ciertos términos. Por ejemplo: _“¿Qué proyectos has hecho con React?”_.

---

## 🔗 Comunicación Frontend-Backend

El frontend construido con Next.js se comunica con el backend inteligente basado en FastAPI mediante peticiones RESTful. El flujo de datos es el siguiente:

1. El usuario realiza una consulta en el componente ChatBot o a través de búsquedas avanzadas.
2. El frontend envía la petición al endpoint del backend (por ejemplo, `/api/search` o la URL de la API de FastAPI).
3. FastAPI recibe la solicitud, orquesta la lógica de búsqueda semántica usando LangChain, FAISS y embeddings de OpenAI.
4. El backend devuelve los resultados en formato JSON, incluyendo respuestas contextuales y metadatos.
5. El componente UI procesa y renderiza los resultados de forma interactiva para el usuario.

Este diseño separa claramente las responsabilidades de UI y lógica de negocio/IA, facilitando la escalabilidad y mantenibilidad.

---

## 📁 Estructura de Carpetas

```
├─ public/
│  ├─ images/           # Activos estáticos
│  └─ cv/               # PDFs de CV (ES / EN)
├─ src/
│  ├─ app/              # Rutas de Next.js (Front-end)
│  ├─ once-ui/          # Biblioteca de componentes UI internos
│  ├─ services/         # Lógica de negocio / integración con APIs
│  │   └─ OpenRouterService.ts
│  └─ constants.ts      # Variables globales (SOCIALS, etc.)
├─ next.config.mjs      # Configuración Next.js
├─ package.json         # Dependencias y scripts
├─ tsconfig.json        # Configuración TypeScript
└─ README.md            # Documentación del proyecto
```

---

## ⚙️ Cómo Ejecutar en Local

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Dkuaik/portfolio.git
   cd portfolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   Crea `.env.local` en la raíz con tu clave de API de OpenRouter (OpenAI).
   ```ini
   NEXT_PUBLIC_OPENROUTER_API_KEY=tu_api_key
   ```

4. **Levantar servidor de desarrollo**
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador**
   > http://localhost:3000

---

## ✨ Características Destacadas

- **Hero interactivo** con efecto _mouse-following glow_ y animaciones de texto (RevealFx).
- **Stack Tecnológico** mostrado con iconos y badges interactivos.
- **ChatBot** integrado en UI con historial de conversación y respuestas en tiempo real.
- **Responsive Design**: adaptado a dispositivos _desktop_, _tablet_ y _mobile_.
- **Componentes Reutilizables**: Once UI proporciona flex, botones, diálogos, inputs, etc.

---

## 📄 Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).

---

> Construido con ❤️ por Enrique Ríos Flores