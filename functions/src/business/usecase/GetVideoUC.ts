import { GetAllVideosDB } from "../../data/getAllVideosDB";

export interface GetVideoUCOutput {
    videos:[]
}

export class GetVideoUC {
    constructor(private database: GetAllVideosDB){}

    public async execute(): Promise<GetVideoUCOutput>{
        return { videos: await this.database.getVideos()}
    }
}