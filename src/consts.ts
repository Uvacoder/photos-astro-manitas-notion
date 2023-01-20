export const ROUTES = [
	{
		href: '/',
		label: 'Portada'
	},
	{
		href: '/about',
		label: 'Sobre el proyecto'
	}
] as const

// Icons from https://icon-sets.iconify.design
export const SOCIAL = [
	{
		label: 'Twitter',
		href: 'https://twitter.com/midudev',
		icon: 'mdi:twitter'
	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/midudev/',
		icon: 'mdi:linkedin'
	},
	{
		label: 'Website',
		href: 'https://midu.dev',
		icon: 'mdi:web'
	}
] as const

export const PERSONAL_INFO = {
	name: 'Ema Suriano',
	title: '👨‍💻 ¡Mejora en programación con proyectos!',
	subtitle: 'Mueve tus manitas, aprende y crea cosas increíbles',
	role: 'Content Creator',
	contact: 'mailto:hi@midu.dev',
	avatar:
    'https://cdn.discordapp.com/attachments/1023544104698773564/1049350422290251847/Ema_portrait_of_a_young_man_with_background_of_snow_mountains_i_f1762cd5-f4f3-4107-839c-194dab4dffa7.png',
	about:
    'During the day I am Software Engineer, but at night I switched into my Artistic side. Most of my creations are made with Mid Journey (AI generation), and later on improved using Adobe Photoshop.'
} as const

export const SEO_INFO = [
	{
		name: 'description',
		content: 'Art portfolio made by Ema Suriano in his free time'
	},
	{ name: 'keywords', content: 'Art portfolio, Digital art, gallery' },
	{ name: 'author', content: PERSONAL_INFO.name }
]
