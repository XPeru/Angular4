export class SubMenu {
    glyphiconClass: string;
    div: string;
    footPageClass: string;
    title: string;
    subtitle: string;

    constructor(
        glyphiconClass: string,
        div: string,
        footPageClass: string,
        title: string,
        subtitle: string) {

        this.glyphiconClass = glyphiconClass;
        this.div = div;
        this.footPageClass = footPageClass;
        this.title = title;
        this.subtitle = subtitle;
    }
}