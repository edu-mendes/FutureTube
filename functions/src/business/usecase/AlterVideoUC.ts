import { AlterVideoGateway } from "../gateway/AlterVideoGateway";

export interface AlterVideoUCInput {
    title: string,
    desc: string,
    videoId: string
}

export class AlterVideoUC {
    constructor(private alterVideoGateway: AlterVideoGateway){}

    async execute(input: AlterVideoUCInput){
        await this.alterVideoGateway.alterVideo(input.title, input.desc, input.videoId)
    }
}