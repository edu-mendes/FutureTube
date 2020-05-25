import { Request, Response } from "express";
import { VideoDetailsUC } from "../business/usecase/VideoDetailsUC";
import { VideosDetailsDB } from "../data/VideosDetailsDB";

export const getVideosDetaisEP = async (req: Request, res: Response) =>{
    try {
        const getVideosDetaisUC = new VideoDetailsUC(new VideosDetailsDB())
        const result = await getVideosDetaisUC.execute({videoId: req.params.videoId})

        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error.message)
    }
}