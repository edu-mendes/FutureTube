import { DeleteVideoGateway } from "../gateway/DeleteVideoGateway";

export interface DeleteVideoUCInput {
    videoId: string,
}

export class DeleteVideoUC {
    constructor(private deleteVideoGateway: DeleteVideoGateway){}

    async excute(input: DeleteVideoUCInput){
        await this.deleteVideoGateway.deleteVideo(input.videoId)
    }
}