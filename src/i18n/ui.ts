export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export const defaultLang = 'en' satisfies keyof typeof languages;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'nav.services': 'Services',
    'nav.portfolio': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cta': "Let's talk",
    'nav.theme': 'Toggle theme',
    'nav.lang': 'Change language',
    'nav.menu': 'Toggle menu',

    'hero.eyebrow': 'Technology services',
    'hero.title': 'Software that fits the way you work.',
    'hero.subtitle':
      'We build custom applications, guide your technology decisions and automate the manual processes that hold you back. Close, clear and in plain language.',
    'hero.cta.primary': 'Talk to us',
    'hero.cta.secondary': 'See what we build',
    'hero.response': 'We reply within one business day.',

    'stack.label': 'Tools we work with',

    'services.eyebrow': 'What we do',
    'services.title': 'Three ways we can help',
    'services.subtitle':
      'From a clear idea to a working product, or from a messy process to an automated one.',
    'services.1.title': 'Custom applications',
    'services.1.desc':
      'Web apps, internal tools and portals designed around your process — not the other way around. From discovery to launch and ongoing support.',
    'services.2.title': 'Technology consulting',
    'services.2.desc':
      'We review your current setup, order the architecture and give you a clear roadmap so you can make confident technical decisions.',
    'services.3.title': 'Workflow automation',
    'services.3.desc':
      'We connect the tools you already use and remove repetitive manual work, saving time and reducing mistakes.',

    'process.eyebrow': 'How we work',
    'process.title': 'A simple, predictable process',
    'process.subtitle':
      'No black boxes: you always know what is happening and what comes next.',
    'process.1.title': 'Discovery',
    'process.1.desc': 'We listen and understand your problem and your goal.',
    'process.2.title': 'Proposal',
    'process.2.desc': 'Scope, approach, timeline and cost — all clear.',
    'process.3.title': 'Development',
    'process.3.desc': 'Incremental delivery with visible progress.',
    'process.4.title': 'Support',
    'process.4.desc': 'Launch, training and ongoing help.',

    'portfolio.eyebrow': 'Work',
    'portfolio.title': 'What we build',
    'portfolio.subtitle':
      'Every solution is different, but these are the kinds of problems we solve most often.',
    'portfolio.1.title': 'Internal management platforms',
    'portfolio.1.desc':
      'Custom software to organize operations and replace spreadsheets and manual tracking.',
    'portfolio.2.title': 'Customer self-service portals',
    'portfolio.2.desc':
      'Let your customers solve on their own what today takes a phone call or an email.',
    'portfolio.3.title': 'Automation and integrations',
    'portfolio.3.desc':
      'Systems that talk to each other and tasks that stop being manual.',
    'portfolio.note':
      'We are expanding our portfolio — get in touch and we will show you recent projects.',

    'about.eyebrow': 'About us',
    'about.title': 'A close team, focused on your result',
    'about.p1':
      'OnyxCode is a technology services team. We do not sell a closed product: we sit next to you, understand your reality and build technology that actually gets used.',
    'about.p2':
      'We believe good software starts with a good conversation, not with a tool. That is why we speak plainly, we are transparent about cost and we stay after launch.',
    'about.1.title': 'Close by nature',
    'about.1.desc': 'We speak your language, not jargon.',
    'about.2.title': 'Problem first',
    'about.2.desc': 'We start from your process and your goal.',
    'about.3.title': 'Here after launch',
    'about.3.desc': 'We stay with you beyond delivery.',

    'contact.eyebrow': 'Contact',
    'contact.title': "Let's talk about your project",
    'contact.subtitle':
      'Tell us what you need to solve. No commitment, no jargon — just a conversation to understand if we can help.',
    'contact.email': 'Email us',
    'contact.whatsapp': 'Message us on WhatsApp',
    'contact.response': 'We usually reply within one business day.',

    'footer.tagline':
      'Custom software, consulting and automation for teams that want to grow.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
  },
  es: {
    'nav.services': 'Servicios',
    'nav.portfolio': 'Trabajos',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'nav.cta': 'Hablemos',
    'nav.theme': 'Cambiar tema',
    'nav.lang': 'Cambiar idioma',
    'nav.menu': 'Abrir menú',

    'hero.eyebrow': 'Servicios de tecnología',
    'hero.title': 'Software que se adapta a cómo trabajás.',
    'hero.subtitle':
      'Creamos aplicaciones a medida, te guiamos en las decisiones tecnológicas y automatizamos los procesos manuales que te frenan. Cerca, claro y sin jerga.',
    'hero.cta.primary': 'Hablemos',
    'hero.cta.secondary': 'Ver qué construimos',
    'hero.response': 'Respondemos dentro del día hábil.',

    'stack.label': 'Trabajamos con',

    'services.eyebrow': 'Qué hacemos',
    'services.title': 'Tres formas de ayudarte',
    'services.subtitle':
      'De una idea clara a un producto funcionando, o de un proceso desordenado a uno automatizado.',
    'services.1.title': 'Aplicaciones a medida',
    'services.1.desc':
      'Apps web, herramientas internas y portales diseñados alrededor de tu proceso, y no al revés. Del relevamiento al lanzamiento y al soporte.',
    'services.2.title': 'Consultoría tecnológica',
    'services.2.desc':
      'Revisamos tu situación actual, ordenamos la arquitectura y te damos una hoja de ruta clara para decidir con confianza.',
    'services.3.title': 'Automatización de flujos',
    'services.3.desc':
      'Conectamos las herramientas que ya usás y sacamos el trabajo manual repetitivo, ganando tiempo y reduciendo errores.',

    'process.eyebrow': 'Cómo trabajamos',
    'process.title': 'Un proceso simple y previsible',
    'process.subtitle':
      'Sin cajas negras: siempre sabés qué está pasando y qué viene después.',
    'process.1.title': 'Descubrimiento',
    'process.1.desc': 'Escuchamos y entendemos tu problema y tu objetivo.',
    'process.2.title': 'Propuesta',
    'process.2.desc': 'Alcance, enfoque, tiempos y costo, todo claro.',
    'process.3.title': 'Desarrollo',
    'process.3.desc': 'Entregas incrementales con avance visible.',
    'process.4.title': 'Acompañamiento',
    'process.4.desc': 'Puesta en marcha, capacitación y soporte.',

    'portfolio.eyebrow': 'Trabajos',
    'portfolio.title': 'Qué construimos',
    'portfolio.subtitle':
      'Cada solución es distinta, pero estos son los tipos de problemas que resolvemos más seguido.',
    'portfolio.1.title': 'Plataformas de gestión interna',
    'portfolio.1.desc':
      'Software a medida para ordenar la operación y reemplazar planillas y seguimiento manual.',
    'portfolio.2.title': 'Portales de autoservicio',
    'portfolio.2.desc':
      'Para que tus clientes resuelvan solos lo que hoy lleva una llamada o un correo.',
    'portfolio.3.title': 'Automatización e integraciones',
    'portfolio.3.desc':
      'Sistemas que se hablan entre sí y tareas que dejan de ser manuales.',
    'portfolio.note':
      'Estamos ampliando nuestro portafolio: escribinos y te mostramos proyectos recientes.',

    'about.eyebrow': 'Nosotros',
    'about.title': 'Un equipo cercano, enfocado en tu resultado',
    'about.p1':
      'OnyxCode es un equipo de servicios de tecnología. No vendemos un producto cerrado: nos sentamos al lado tuyo, entendemos tu realidad y construimos tecnología que de verdad se usa.',
    'about.p2':
      'Creemos que el buen software empieza por una buena conversación, no por una herramienta. Por eso hablamos claro, somos transparentes con los costos y seguimos después del lanzamiento.',
    'about.1.title': 'Cercanía de verdad',
    'about.1.desc': 'Hablamos tu idioma, no jerga.',
    'about.2.title': 'Primero el problema',
    'about.2.desc': 'Arrancamos por tu proceso y tu objetivo.',
    'about.3.title': 'Seguimos después',
    'about.3.desc': 'Te acompañamos más allá de la entrega.',

    'contact.eyebrow': 'Contacto',
    'contact.title': 'Hablemos de tu proyecto',
    'contact.subtitle':
      'Contanos qué necesitás resolver. Sin compromiso y sin jerga: una conversación para entender si podemos ayudarte.',
    'contact.email': 'Escribinos por email',
    'contact.whatsapp': 'Escribinos por WhatsApp',
    'contact.response': 'Solemos responder dentro del día hábil.',

    'footer.tagline':
      'Software a medida, consultoría y automatización para equipos que quieren crecer.',
    'footer.services': 'Servicios',
    'footer.company': 'Empresa',
    'footer.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados.',
  },
} as const;
