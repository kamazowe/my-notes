export class Note {
    public title: string;
    public data: string;
    public description: string;
    public id: number;
    public imagePath: string;

    constructor(title:string, data: string, desc: string, id: number, imgPath?: string) {
        this.title = title;
        this.data = data;
        this.description = desc;
        this.id = id;
        this.imagePath = imgPath;
    }
}