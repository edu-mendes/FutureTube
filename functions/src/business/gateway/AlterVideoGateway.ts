export interface AlterVideoGateway {
    alterVideo(title: string, desc: string, videoId: string): Promise<void>
}