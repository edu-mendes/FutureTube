export class Videos {
    constructor(
        private urlVideo: string,
        private urlPhotoVideo: string,
        private title: string,
        private desc: string
    ) { }

    public getUrlVideo(): string {
        return this.urlVideo;
    }

    public getUrlPhotoVideo(): string {
        return this.urlPhotoVideo;
    }

    public getTitle(): string {
        return this.title;
    }

    public getDesc(): string {
        return this.desc;
    }
}