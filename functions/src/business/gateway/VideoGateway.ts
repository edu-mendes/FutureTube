import { Videos } from "../entities/videos";

export interface VideoGateway {
    createVideo(urlVideo: string, urlPhotoVideo: string, title: string, desc: string, name: string): Promise<void>
    getVideoById(id: string): Promise<Videos | undefined>
  }