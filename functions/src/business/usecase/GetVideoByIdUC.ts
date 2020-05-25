import { VideoByIdGateway } from "../gateway/VideoByIdGateway"
import { Videos } from "../entities/videos"

interface GetVideoByIdUCInput {
    userId: string
}

interface GetVideoByIdUCOutput {
    videos: Videos[]
}

export class GetVideoByIdUC {
    constructor(private videoGateway: VideoByIdGateway) {}

    async execute(input: GetVideoByIdUCInput): Promise<GetVideoByIdUCOutput>{
        const result = await this.videoGateway.getVideoById(input.userId)
        
        if (!result) {
            throw new Error("There is already a show at this time")
        }
        return {
            videos: result
        }
    }
}