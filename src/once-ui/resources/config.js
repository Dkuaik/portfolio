const baseURL = 'enriqriosf.com'

// default customization applied to the HTML in the main layout.tsx
const style = {
    theme:       'dark',        // dark | light
    neutral:     'gray',        // sand | gray | slate
    brand:       'violet',      // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'cyan',        // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'contrast',    // color | contrast
    solidStyle:  'flat',        // flat | plastic
    border:      'playful',     // rounded | playful | conservative
    surface:     'translucent', // filled | translucent
    transition:  'all',         // all | micro | macro
    scaling:     '100',         // 90 | 95 | 100 | 105 | 110
}

// default metadata
const meta = {
    title: 'Enrique Ríos Flores | Portafolio de Proyectos IA',
    description: 'Físico matemático especializado en IA, automatización de procesos, integración de APIs y desarrollo de software.'
}


// default open graph data
const og = {
    title: 'Enrique Ríos Flores | Portafolio IA',
    description: 'Proyectos y experiencia de un físico matemático especializado en IA, automatización de procesos y desarrollo de software',
    type: 'website'
}

// default schema data
const schema = {
    logo: '',
    type: 'Person',
    name: 'Enrique Ríos Flores',
    description: 'Físico matemático especializado en IA, automatización de procesos y desarrollo de software',
    email: 'enrq.rios.f@gmail.com'
}

// social links
const social = {
    github: 'https://github.com/Dkuaik',
    linkedin: 'https://linkedin.com/in/enrqriosf'
}

export { baseURL, style, meta, og, schema, social };