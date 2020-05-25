export interface DeleteVideoGateway {
    deleteVideo(videoId: string): Promise<void>
}