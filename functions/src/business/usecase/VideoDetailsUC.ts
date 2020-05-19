import { VideosDetailsGateway } from "../gateway/VideosDetailsGateway";


export interface VideoDetailsUCUnput {
    videoId: string
}

export interface VideoDetailsUCOutput {
    videosDetails: any
}

export class VideoDetailsUC {
    constructor(private videoDetaisGw: VideosDetailsGateway){}

    public async execute(input: VideoDetailsUCUnput): Promise<VideoDetailsUCOutput>{
        const videosDetails = await this.videoDetaisGw.getVideosDetails(input.videoId)
        return ({videosDetails})
    }
}