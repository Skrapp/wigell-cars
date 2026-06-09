export type PageItem = {
    title: string;
    href: string;
    description?: string;
    img?: string;
    imgAlt?: string;
}

export const mainNavigation: PageItem[] = [
    {
        title: 'Hem',
        href: '/',
        description: 'Startsidan för Wigells biluthyrning'
    },
    {
        title: 'Bilar',
        href: '/cars',
        description: 'Exempel och beskrivingningar av stil- och designval för Wigells biluthyrning'
    },
    {
        title: 'Style guide',
        href: '/styleguide',
        description: 'Exempel och beskrivingningar av stil- och designval för Wigells biluthyrning'
    }
];

export const adminNavigation: PageItem[] = [
    {
        title: 'Admin',
        href: '/admin',
        description: 'Adminpanel'
    }
]

export const userNavigation: PageItem[] = [
    {
        title: 'Mina sidor',
        href: '/me',
        description: 'Redigera dina uppgifter'
    }
]

export const styleGuideNavigation: PageItem[] = [
    {
        title: 'Knappar',
        href: '/styleguide/buttons',
        description: 'Knappstilar och regler för olika knappfunktioner',
        img: '/imgs/cars/placeholder.jpg',
        imgAlt: 'Placeholderbild för knappar'
    },
    {
        title: 'Cards',
        href: '/styleguide/cards',
        description: 'Kortkomponenter och deras användning',
        img: '/imgs/cars/placeholder.jpg',
        imgAlt: 'Placeholderbild för kortkomponenter'
    },
    {
        title: 'Rubriker',
        href: '/styleguide/headings',
        description: 'Rubrikkomponenter för olika hierarkier',
        img: '/imgs/cars/placeholder.jpg',
        imgAlt: 'Placeholderbild för rubriker'
    },
    {
        title: 'Tabeller',
        href: '/styleguide/tables',
        description: 'Tabellkomponenter för datapresentation',
        img: '/imgs/cars/placeholder.jpg',
        imgAlt: 'Placeholderbild för tabeller'
    },
    {
        title: 'Formulär',
        href: '/styleguide/forms',
        description: 'Formulärkomponenter för datainmatning',
        img: '/imgs/cars/placeholder.jpg',
        imgAlt: 'Placeholderbild för formulär'
    },
    {
        title: 'Användarkomponenter',
        href: '/styleguide/users',
        description: 'Komponenter för användarinfo och autentisering',
        img: '/imgs/cars/placeholder.jpg',
        imgAlt: 'Placeholderbild för användarkomponenter'
    },
    {
        title: 'Layoutkomponenter',
        href: '/styleguide/layout-components',
        description: 'Komponenter för sidstruktur och layout',
        img: '/imgs/cars/placeholder.jpg',
        imgAlt: 'Placeholderbild för layoutkomponenter'
    },
    {
        title: 'Bilkomponenter',
        href: '/styleguide/car-components',
        description: 'Komponenter för bilvisning och listning',
        img: '/imgs/cars/placeholder.jpg',
        imgAlt: 'Placeholderbild för bilkomponenter'
    },
    {
        title: 'Navigation',
        href: '/styleguide/navigation',
        description: 'Navigeringsmeny för horisontella länkar',
        img: '/imgs/cars/placeholder.jpg',
        imgAlt: 'Placeholderbild för navigation'
    },
    {
        title: 'PageShell',
        href: '/styleguide/page-shell',
        description: 'Wrapper-komponent för sidinnehål',
        img: '/imgs/cars/placeholder.jpg',
        imgAlt: 'Placeholderbild för PageShell'
    },
    {
        title: 'AdFooter',
        href: '/styleguide/ad-footer',
        description: 'Annonsfooter-komponent längst ned på sidan',
        img: '/imgs/cars/placeholder.jpg',
        imgAlt: 'Placeholderbild för AdFooter'
    }
];