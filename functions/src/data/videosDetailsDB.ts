import * as admin from "firebase-admin";
import { VideosDetailsGateway } from "../business/gateway/VideosDetailsGateway";

export class VideosDetailsDB implements VideosDetailsGateway {
    async getVideosDetails(videoId: string): Promise<any> {
        try {
            const result = await admin.firestore().collection('videos').doc(videoId).get();
            const userId = await admin.firestore().collection('users').doc().get().then(doc => doc.id)
            const user = await admin.firestore().collection('users').doc(userId).get()

            const videoDetails = {
                title: result.data()?.title,
                desc: result.data()?.desc,
                urlPhotoVideo: result.data()?.urlPhotoVideo,
                urlVideo: result.data()?.urlVideo,
                userName: user.data()?.username
            }
            return videoDetails
        } catch (error) {
            throw new Error("Video not found")
        }
    }
}