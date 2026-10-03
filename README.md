# OnyxCode Web

Landing page bilingüe (EN/ES) con tema claro/oscuro para **OnyxCode**, el agente
de código con IA. Construida con [Astro](https://astro.build) y empaquetada en
Docker para desplegar en Coolify.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera dist/
npm run preview    # sirve dist/ localmente
npm run check      # astro check (tipos)
```

Rutas: `/` redirige a `/en/`; versiones en `/en/` y `/es/`.

## Sistema de diseño

- Tokens semánticos en `src/styles/tokens.css` (claro/oscuro vía
  `data-theme` en `<html>`).
- Paleta: base onyx (`#0b0b0d`) + acento violeta (`#7c5cff`).
- Tipografía: Inter Variable (UI) + JetBrains Mono Variable (código).

## Docker

Build y ejecución local:

```bash
docker build -t onyxcode-web .
docker run --rm -p 8080:80 onyxcode-web
# http://localhost:8080
```

La imagen final es `nginx:alpine` sirviendo el build estático. Healthcheck en
`/healthz`.

## Coolify

1. Nuevo recurso → **Application** → conecta el repositorio.
2. Build pack: **Dockerfile**.
3. Puerto expuesto: **80**.
4. Healthcheck path: **/healthz**.
5. Deploy.

No requiere variables de entorno. El dominio se configura en Coolify; el
`canonical`/sitemap usan `site` en `astro.config.mjs` (ajústalo a tu dominio
final).
