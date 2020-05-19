import {Request,Response} from 'express';
import { GetAllVideosDB } from '../data/getAllVideosDB';
import { GetVideoUC } from '../business/usecase/GetVideoUC';

export const getAllVideosEP = async (req: Request, res: Response) => {
    try {
        const getVideosDB = new GetAllVideosDB();
        const getVideosUC = new GetVideoUC(getVideosDB);
        const videos = await getVideosUC.execute();

        res.status(200).send({
            videos,
        })
    } catch (error) {
       res.status(400).send(error.message) 
    }
}