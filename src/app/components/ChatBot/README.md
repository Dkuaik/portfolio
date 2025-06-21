# ChatBot Component

Este componente implementa un chat flotante con IA integrada usando OpenRouter y soporte completo para Markdown.

## Características

- **Botón flotante**: Posicionado en la esquina inferior derecha
- **Interfaz conversacional**: Panel de chat desplegable con animaciones suaves
- **IA integrada**: Utiliza modelos de lenguaje a través de OpenRouter API
- **Renderizado Markdown**: Soporte completo para markdown con react-markdown
- **Responsive**: Adaptado para dispositivos móviles
- **Historial de conversación**: Mantiene el contexto durante la sesión
- **Manejo de errores**: Fallback a respuestas locales si falla la API

## Soporte Markdown

El chatbot puede renderizar respuestas con formato markdown, incluyendo:

- **Texto en negrita** y *cursiva*
- `Código inline` y bloques de código
- Listas con viñetas y numeradas
- > Citas y blockquotes
- Enlaces [ejemplo](https://example.com)
- Títulos y subtítulos
- Tablas
- Y más elementos de GitHub Flavored Markdown

### Ejemplo de respuesta con markdown:
```markdown
¡Hola! 👋 Soy el **asistente virtual** de Enrique.

**Tecnologías principales:**
- `React` y `Next.js`
- `TypeScript` para mayor robustez
- `Node.js` en el backend

> ¿Te interesa alguna tecnología específica?
```

## Configuración

1. **Obtener API Key de OpenRouter**:
   - Ve a [OpenRouter.ai](https://openrouter.ai/)
   - Crea una cuenta
   - Obtén tu API key

2. **Configurar variables de entorno**:
   ```bash
   # Copia el archivo de ejemplo
   cp .env.example .env.local
   
   # Edita .env.local y agrega tu API key
   NEXT_PUBLIC_OPENROUTER_API_KEY=tu_clave_aqui
   ```

## Dependencias

- `react-markdown`: Para renderizar markdown
- `remark-gfm`: Soporte para GitHub Flavored Markdown

```bash
npm install react-markdown remark-gfm
```

## Uso

El componente se agrega automáticamente al layout principal y aparece como un botón flotante en todas las páginas.

### Personalización del Prompt

El comportamiento del chatbot se puede personalizar editando el archivo:
`/public/prompts/system_prompt.txt`

### Modelos Disponibles

Por defecto usa `google/gemini-2.5-flash-preview-05-20`, pero puedes cambiar el modelo en `OpenRouterService.ts`.

## Archivos Principales

- `ChatBot.tsx` - Componente principal
- `ChatBot.module.scss` - Estilos
- `OpenRouterService.ts` - Servicio para la API
- `/public/prompts/system_prompt.txt` - Prompt del sistema

## Funcionalidades Técnicas

- **Auto-resize** del textarea de entrada
- **Scroll automático** a nuevos mensajes
- **Indicador de escritura** mientras la IA responde
- **Gestión de historial** limitada para optimizar tokens
- **Manejo de errores** robusto
- **Accesibilidad** con ARIA labels apropiados
