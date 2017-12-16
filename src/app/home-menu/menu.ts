export class Menu {
    alt: string;
    title: string;
    subtitle: string;
    stringMenu: string;
    color: string;
    src: string;
    background: string;
    classIcon: string;

    constructor(
        alt: string,
        title: string,
        subtitle: string,
        stringMenu: string,
        color: string,
        src: string,
        background: string,
        classIcon: string) {

        this.alt = alt;
        this.title = title;
        this.subtitle = subtitle;
        this.stringMenu = stringMenu;
        this.color = color;
        this.src = src;
        this.background = background;
        this.classIcon = classIcon;
    }
}