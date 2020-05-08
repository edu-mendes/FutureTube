import * as admin from "firebase-admin";
import { VideoGateway } from "../business/gateway/VideoGateway";
import { Videos } from "../business/entities/videos";

export class VideoDB implements VideoGateway {
  async createVideo(urlVideo: string, urlPhotoVideo: string, title: string, desc: string): Promise<void> {
    await admin.firestore().collection('videos').add({
      urlVideo,
      urlPhotoVideo,
      title,
      desc
    });
  }

  async getVideoById(id: string): Promise<Videos | undefined>{
    return
  }
}