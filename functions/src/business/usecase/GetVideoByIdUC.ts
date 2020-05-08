import { VideoGateway } from "../gateway/VideoGateway"

interface GetVideoByIdUCInput {
    id: string
}

interface GetVideoByIdUCOutput {
    urlVideo: string,
    urlPhotoVideo: string,
    title: string,
    desc: string
}

export class GetVideoByIdUC {
    constructor(private videoGateway: VideoGateway) {}

    async execute(input: GetVideoByIdUCInput): Promise<GetVideoByIdUCOutput>{
        const videos = await this.videoGateway.getVideoById(input.id)
        
        if (!videos) {
            throw new Error("There is already a show at this time")
        }
        return {
            urlVideo: videos.getUrlVideo(),
            urlPhotoVideo: videos.getUrlPhotoVideo(),
            title: videos.getTitle(),
            desc: videos.getDesc()
        }
    }
}