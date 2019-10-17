export class Note {
    public title: string;
    public data: string;
    public description: string;
    public content: string;
    public id: number;
    public imagePath: string;

    constructor(options?:{title:string, data: string, desc: string, cont:string, id: number, imgPath: string}) {
        this.title = options.title || null;
        this.data = options.data || null;
        this.description = options.desc || null;
        this.content = options.cont || null;
        this.id = options.id || null;
        this.imagePath = options.imgPath || null;
    }
}