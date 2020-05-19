export interface VideoGateway {
    createVideo(urlVideo: string, urlPhotoVideo: string, title: string, desc: string, name: string): Promise<void>
    
  }