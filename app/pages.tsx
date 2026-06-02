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
        title: 'Style guide',
        href: '/styleguide',
        description: 'Exempel och beskrivingningar av stil- och designval för Wigells biluthyrning'
    }
]

export const styleGuideNavigation: PageItem[] = [
    {
        title: 'Knappar',
        href: '/styleguide/buttons',
        description: 'Knappstilar och regler för olika knappfunktioner',
        img: 'imgs/wildpixar-buick-1400243_640.jpg',
        imgAlt: 'Exempelbild av knappar'
    },{
        title: 'Cards',
        href: '/styleguide/cards',
        description: 'Kortkomponenter och deras användning',
        img: '/cards.png',
        imgAlt: 'Exempelbild av kortkomponenter'
    }
]