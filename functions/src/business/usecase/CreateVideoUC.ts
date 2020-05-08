import { UserGateway } from "../gateway/UserGateway";
import { VideoGateway } from "../gateway/VideoGateway";

export interface VideoUCInput {
    urlVideo: string, 
    urlPhotoVideo: string, 
    title: string, 
    desc: string,
    userId: string
}

export class CreateVideoUC {
    constructor(
      private userGateway: UserGateway,
      private videoGateway: VideoGateway
    ) {}
  
     async execute(input: VideoUCInput) {
        const name = await this.userGateway.getName(input.userId);
        await this.videoGateway.createVideo(input.urlVideo, input.urlPhotoVideo, input.title, input.desc, name)
     }
  }
  
  
 