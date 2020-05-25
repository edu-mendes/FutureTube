import { Request, Response } from "express";
import { GetVideoByIdUC } from "../business/usecase/GetVideoByIdUC";
import { VideosByIdDB } from "../data/VideosByIdDB";

export const getVideosByIdEP = async(req: Request, res: Response) => {
    try {
        const getVideosByIdUC = new GetVideoByIdUC(new VideosByIdDB())
        const result = await getVideosByIdUC.execute({
            userId: req.headers.auth as string
        })

        res.status(200).send(result)

    } catch (error) {
        res.status(400).send(error.message)
    }
}