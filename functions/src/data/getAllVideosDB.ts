import * as admin from "firebase-admin";

export class GetAllVideosDB {
    async getVideos(): Promise<any> {
        const videoCollection = admin.firestore().collection('videos');
        const snapshot = await videoCollection.get();

        return snapshot.docs.map(doc => {
            let video = {
                urlVideo: doc.data().urlVideo,
                urlPhotoVideo: doc.data().urlPhotoVideo,
                title: doc.data().title,
                desc: doc.data().desc,
                id: doc.id
            }
            return video;
        })
    }
}