export interface VideoGateway {
    createVideo(urlVideo: string, urlPhotoVideo: string, title: string, desc: string, id: string): Promise<void>
    
  }