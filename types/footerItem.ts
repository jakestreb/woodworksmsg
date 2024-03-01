type FooterLink = {
    name: string;
    url: string;
}

export type FooterItem = {
    id: number;
    title: string;
    links: FooterLink[];
};
