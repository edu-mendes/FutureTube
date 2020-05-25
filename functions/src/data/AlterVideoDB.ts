import * as admin from "firebase-admin";
import { AlterVideoGateway } from "../business/gateway/AlterVideoGateway";

export class AlterVideoDB implements AlterVideoGateway {
    async alterVideo(title: string, desc: string, videoId: string): Promise<void>{
        await admin.firestore().collection('videos').doc(videoId).update({
            title,
            desc
        })
    }
}