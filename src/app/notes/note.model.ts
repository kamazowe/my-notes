export class Note {
    public title: string;
    public date: string;
    public description: string;
    public content: string;
    public id: number;
    public imagePath: string;

    constructor(options?:{title:string, date: string, desc: string, cont:string, id: number, imgPath: string}) {
        this.title = options.title || null;
        this.date = options.date || null;
        this.description = options.desc || null;
        this.content = options.cont || null;
        this.id = options.id || null;
        this.imagePath = options.imgPath || null;
    }
}