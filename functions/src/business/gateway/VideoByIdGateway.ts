import { Videos } from "../entities/videos";

export interface VideoByIdGateway {
    getVideoById(userId: string): Promise<Videos[]>
}