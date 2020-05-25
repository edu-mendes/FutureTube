import * as admin from "firebase-admin";
import { DeleteVideoGateway } from "../business/gateway/DeleteVideoGateway";

export class DeleteVideoDB implements DeleteVideoGateway {
    async deleteVideo(videoId: string): Promise<void>{
        await admin.firestore().collection('videos').doc(videoId).delete()
    }
}