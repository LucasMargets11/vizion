# Lumiax – Agencia Audiovisual

Landing minimalista construida con Vite + React + TypeScript + Tailwind CSS.

## Stack
- Vite (React + TS)
- Tailwind CSS (+ forms)
- Framer Motion
- ESLint + Prettier + simple-import-sort
- Vitest + React Testing Library
- Husky + lint-staged
- SVGR (importar SVG como componentes)

## Scripts
```
npm run dev       # servidor de desarrollo
npm run build     # build producción
npm run preview   # previsualizar build
npm run lint      # lint
npm run format    # formatear
npm run typecheck # comprobar tipos
npm run test      # tests
```

## Instalación
```
npm install
npm run prepare # instala hooks de husky
```

## Despliegue (ejemplo Vercel)
1. Crear nuevo proyecto y apuntar al repo.
2. Framework: Vite. Comando build: `npm run build`. Directorio: `dist`.
3. Variables adicionales opcionales (analytics, etc.)

### AWS Amplify / S3
Build command: `npm run build` y subir carpeta `dist` al bucket S3 con hosting estático habilitado.

## Personalización
### Colores
Editar `tailwind.config.ts` (`extend.colors`).

### Tipografías
Cambiar los `<link>` en `index.html`.

### Agregar trabajos (reel)
1. Añadir thumbnail en `src/assets/images/`.
2. Registrar entrada en `ReelShowcase.tsx` dentro de `items[]`.

### Cambiar video hero
Reemplazar `src/assets/video/hero.mp4` con uno optimizado (ideal <2MB, H.264, muted, loop, autoplay, playsinline).

### WhatsApp
Editar número y mensaje por defecto en `ContactForm.tsx`.

## Accesibilidad & SEO
- Semántica correcta, roles ARIA donde corresponde.
- Meta tags base en `index.html` y componente `SEO` por página.

## Tests
Ejemplos básicos en `src/components/ui/__tests__/`.

## Estructura
Ver árbol en este repo (carpetas `app/`, `components/`, etc.).

## Licencia
MIT – Ajustar según necesidades.
