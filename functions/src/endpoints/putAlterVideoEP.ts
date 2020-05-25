import { Request, Response } from "express";
import { AlterVideoDB } from "../data/AlterVideoDB";
import { AlterVideoUC, AlterVideoUCInput } from "../business/usecase/AlterVideoUC";

export const putAlterVideoEP = async(req: Request, res: Response) => {
    try {
        const alterVideoDB = new AlterVideoDB()
        const alterVideoUC = new AlterVideoUC(alterVideoDB)
        const result: AlterVideoUCInput = {
            title: req.body.title,
            desc: req.body.desc,
            videoId: req.body.videoId
        }

        await alterVideoUC.execute(result)
        res.status(200).send('')

    } catch (error) {
        res.status(400).send(error.message)
    }
}