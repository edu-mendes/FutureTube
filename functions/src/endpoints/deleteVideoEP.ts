import { Request, Response } from "express";
import { DeleteVideoDB } from "../data/DeleteVideoDB";
import { DeleteVideoUC, DeleteVideoUCInput } from "../business/usecase/deleteVideoUC";

export const deleteVideoEP = async(req: Request, res: Response) => {
    try {
        const deleteVideoDB = new DeleteVideoDB()
        const deleteVideoUC = new DeleteVideoUC(deleteVideoDB)
        const result : DeleteVideoUCInput = {
            videoId: req.params.videoId
        }

        await deleteVideoUC.excute(result)
        res.status(200).send('')
    } catch (error) {
        res.status(400).send(error.message)
    }
}
