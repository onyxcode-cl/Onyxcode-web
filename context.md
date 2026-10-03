# Contexto del proyecto — OnyxCode Web

Documento de contexto para humanos y agentes: qué es OnyxCode, a quién ayuda,
cómo se presenta la información y qué decisiones de diseño la definen. Para
comandos y gotchas técnicos ver `AGENTS.md`.

> **Nota de estado:** el código actual todavía refleja el concepto anterior
> (landing de un agente de código open source: terminal, instalación por npm,
> enlaces a GitHub). Este documento es la **fuente de verdad** del rumbo
> correcto: una web de empresa de servicios de tecnología. La convergencia del
> código hacia este contexto se hará por fases (ver última sección).

## Quiénes somos y objetivo

- **Marca:** OnyxCode.
- **Qué es:** empresa de servicios de tecnología. Ayudamos a organizaciones a
  crear **aplicaciones a medida**, a tomar mejores decisiones mediante
  **consultoría tecnológica** y a **aplicar tecnología a los flujos** que ya
  tienen, para que dejen de depender de procesos manuales.
- **Objetivo de la web:** que un potencial cliente sienta que lo entendemos y
  **nos contacte**. Es una página de servicios, no de producto: no hay registro
  ni instalación. La conversión es iniciar una conversación.
- **Meta emocional:** transmitir **cercanía** y confianza. Quien llega suele
  tener un problema que lo frustra y temor a que "lo técnico" sea caro o
  incomprensible. La página debe bajar esa barrera.

## A quién ayudamos y qué dolores resolvemos

Público principal: pymes y equipos internos de empresas que necesitan
digitalizar o mejorar sus procesos. Perfiles típicos: dueño/gerente de una pyme,
responsable de operaciones, líder de un área que hoy trabaja con planillas,
correos y tareas repetitivas.

Dolores recurrentes que la web debe nombrar con sus palabras:

- Procesos que se hacen a mano y consumen horas que nadie recupera.
- Herramientas que no se comunican entre sí y obligan a copiar datos una y otra
  vez.
- Software que quedó chico y no acompaña el crecimiento.
- Ideas de producto que nunca se concretan por no saber por dónde empezar.
- Miedo a contratar "tecnología" y terminar con algo que nadie usa.

## Propuesta de valor

- **Cercanía real:** hablamos claro, sin jerga. Explicamos opciones y costos
  como se los explicaríamos a un socio, no a un ingeniero.
- **Foco en el problema, no en la tecnología:** primero entendemos el proceso y
  el resultado buscado; después elegimos herramientas.
- **Acompañamiento de punta a punta:** desde el descubrimiento hasta la puesta
  en marcha y el soporte posterior.
- **Soluciones a medida:** construimos lo que el cliente necesita, sin obligarlo
  a adaptarse a un producto cerrado.
- **Tecnología como medio:** usamos el stack adecuado a cada caso, incluida la
  automatización y la IA cuando aportan tiempo o costo, nunca como fin.

## Servicios

Tres líneas. Cada una debe expresarse como beneficio para el cliente, con
ejemplos concretos.

1. **Aplicaciones a medida** — diseño y desarrollo de software propio: apps
   web, paneles internos, portales, integraciones. Del relevamiento al
   despliegue.
2. **Consultoría tecnológica** — diagnóstico de la situación actual, hoja de
   ruta, selección de herramientas, ordenamiento de arquitectura y
   acompañamiento en decisiones técnicas.
3. **Aplicación de tecnología a tus flujos** — automatización de procesos,
   integración de sistemas existentes y mejora de tareas repetitivas para
   ahorrar tiempo y reducir errores.

## Cómo trabajamos

Proceso en etapas, pensado para dar previsibilidad y confianza:

1. **Descubrimiento** — conversamos, entendemos el problema y el objetivo.
2. **Propuesta** — alcance, enfoque, tiempos y costo claros.
3. **Desarrollo** — entregas incrementales con visibilidad del avance.
4. **Acompañamiento** — puesta en marcha, capacitación y soporte.

No hay copy definitivo todavía; los nombres y la descripción de cada etapa se
validarán con el equipo.

## Portafolio y prueba social

- **Hoy:** aplicaciones creadas por nosotros (portafolio). Es el principal
  activo de confianza disponible.
- **Pendiente de completar:** listado real de apps (nombre, problema, solución,
  resultado), testimonios de clientes y logos. Mientras no existan, la sección
  de portafolio se arma con placeholders y se planifica cómo recolectar estos
  insumos.
- Los testimonios y métricas concretas suelen convertir mejor que cualquier
  descripción de servicios, por eso son prioridad una vez haya material.

## Conversión y contacto

- **Objetivo único:** que el visitante inicie contacto.
- **Canales:** **email** y **WhatsApp**. Son los CTA principales del hero y se
  repiten al final de la página.
- Sin formulario en la primera versión; se evalúa más adelante como mejora
  (reduce fricción para quien no usa email ni WhatsApp).
- Todo botón de contacto debe prometer una respuesta: reforzar la cercanía con
  un compromiso concreto de tiempo de respuesta.

## Tono y voz

- Cercano, humano y directo. Español rioplatense neutro; inglés equivalente para
  la versión EN.
- Frases cortas, verbos en primera persona del plural ("entendemos",
  "construimos", "te acompañamos").
- Evitar buzzwords: nada de "sinergia", "transformación digital" vacía ni
  protagonismo de la IA.
- Nombrar el dolor del cliente antes de hablar de nosotros.

## Arquitectura de información

Página única, lectura de arriba a abajo, con contacto siempre a un clic:

1. **Navbar** — logo OnyxCode, anclas Servicios / Portafolio / Nosotros /
   Contacto, switch de idioma EN/ES, toggle de tema y CTA de contacto.
2. **Hero** — titular centrado en el problema del cliente, subtítulo con la
   propuesta de valor y dos CTA (email y WhatsApp).
3. **Franja de confianza** — logos o métricas (pendiente de material).
4. **Servicios** — las tres líneas.
5. **Cómo trabajamos** — las etapas del proceso.
6. **Portafolio** — aplicaciones creadas por nosotros.
7. **Sobre nosotros** — quiénes somos y por qué la cercanía (fotos humanas).
8. **CTA de contacto** — email y WhatsApp.
9. **Footer** — marca, enlaces, datos de contacto y copyright.

Versiones: `/en/` y `/es/`; `/` redirige a `/en/`.

## Bilingüismo

- Dos idiomas: `en` (por defecto) y `es`. **Se mantiene** por el mercado local +
  internacional.
- **Todo el texto visible** vive en `src/i18n/ui.ts` bajo `ui.en` y `ui.es`; se
  consume con `t('clave')`. Con el nuevo rumbo, las claves se reorganizan por
  sección: `nav.*`, `hero.*`, `services.*`, `process.*`, `portfolio.*`,
  `about.*`, `contact.*`, `footer.*`. Las claves `terminal.*` quedan obsoletas.
- Al añadir copy nuevo: agregarlo en **ambos** idiomas. Si falta una clave en
  `es`, cae silenciosamente a `en`.
- Las rutas se generan solas desde los idiomas presentes; ver la advertencia
  sobre el regex `en|es` en `AGENTS.md` si se añade un idioma nuevo.

## Identidad visual

Concepto: **onyx** (piedra negra): solidez, confianza y elegancia mineral. La
piedra es dura y permanente — eso es lo que queremos transmitir — pero el trato
es cercano y humano. El acento violeta aporta modernidad sin frialdad técnica.

### Paleta

Tokens en `src/styles/tokens.css`. Nunca usar hex directo en componentes.

| Rol | Dark | Light |
|---|---|---|
| `--bg` | `#0b0b0d` | `#ffffff` |
| `--surface` | `#17171b` | `#f4f4f6` |
| `--border` | `#26262c` | `#e4e4e9` |
| `--text` | `#ededf0` | `#141417` |
| `--text-muted` | `#9a9aa2` | `#63636b` |
| `--brand` | `#7c5cff` | `#7c5cff` (hover `#6a48f0`) |

- Acento de marca: violeta `#7c5cff`.
- Colores semánticos de estado: `success #3fb950`, `warning #d29922`,
  `danger #f85149`.
- Los tokens `--term-*` existen para la terminal del concepto anterior; si se
  retira el componente, se pueden remover.

### Tipografía

- **Inter Variable** para UI; **JetBrains Mono Variable** para acentos de código
  (si se conservan).
- Ambas self-hosted con `@fontsource-variable/*`, importadas en `BaseLayout`.
- Escala fluida con `clamp()` (`--step--1` … `--step-4`).

### Otros criterios

- Radio, espaciado (base 4px) y sombras también son tokens.
- Tema oscuro por defecto; el claro se activa con `data-theme` y se recuerda en
  `localStorage`.
- Movimiento sobrio. La cercanía se apoya en fotos humanas, lenguaje llano y
  señales de confianza, no en efectos.

## Placeholders / TODO

Completar antes de publicar:

- Dominio real (hoy `site` en `astro.config.mjs` es `https://onyxcode.dev`).
  Afecta canonical, `hreflang` y sitemap.
- **Email** de contacto real.
- **Número de WhatsApp** real (y formato de enlace `https://wa.me/...`).
- **Portafolio:** lista de aplicaciones creadas por nosotros (nombre, problema,
  solución, resultado).
- Testimonios y/o logos de clientes, si se consiguen.
- Revisar y validar todo el copy con el equipo.

## Fuera de alcance (por ahora)

- No hay Features, Precios ni Blog.
- No hay documentación técnica ni sección para desarrolladores.
- No hay formulario de contacto ni backend; la conversión es por email/WhatsApp.
- No hay CMS: el contenido vive en `src/i18n/ui.ts`.

## Convergencia del código (fases posteriores)

Actualizar este documento no cambia el código. Para llevarlo a la realidad:

1. Reescribir `src/i18n/ui.ts` con las claves nuevas en `en` y `es`.
2. Crear los componentes de sección (Servicios, Proceso, Portafolio, Nosotros,
   CTA de contacto).
3. Retirar `Terminal.astro` (y los tokens `--term-*` si no se reutilizan).
4. Ajustar `Navbar`, `Hero` y `Footer`: anclas, CTA de email/WhatsApp y datos
   reales.
5. Actualizar metadatos de `src/pages/[lang]/index.astro` y este mismo rumbo en
   `AGENTS.md`.
