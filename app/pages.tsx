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
    },{
        title: 'Cards',
        href: '/styleguide/cards',
        description: 'Kortkomponenter och deras användning',
        img: '/imgs/cars/placeholder.jpg',
        imgAlt: 'Placeholderbild för kortkomponenter'
    }
];