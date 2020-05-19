export interface VideosDetailsGateway {
    getVideosDetails(videoId: string): Promise<any>
}