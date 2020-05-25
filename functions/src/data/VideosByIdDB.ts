import * as admin from "firebase-admin";
import { Videos } from "../business/entities/videos";
import { VideoByIdGateway } from "../business/gateway/VideoByIdGateway";

export class VideosByIdDB implements VideoByIdGateway{
    async getVideoById(userId: string): Promise<Videos[]>{
        const verifyToken = await admin.auth().verifyIdToken(userId)
        const userToken = verifyToken.uid
        const result = await admin.firestore().collection('videos').where('userId', '==', userToken).get()

        return result.docs.map(doc => {
            let video = new Videos (
                doc.data().urlVideo,
                doc.data().urlPhotoVideo,
                doc.data().title,
                doc.data().desc,
                doc.id
            )
            return video
        })
    }
}