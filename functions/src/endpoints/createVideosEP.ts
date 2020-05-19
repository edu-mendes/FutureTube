import { Request, Response } from 'express';
import { UserDB } from "../data/UserDB";
import { VideoDB } from "../data/VideoDB";
import { AuthenticationService } from "../services/AuthenticationService";
import { CreateVideoUC, VideoUCInput } from "../business/usecase/CreateVideoUC";

export const createVideosEP = async (req: Request, res: Response) => {
    try {
      const userDatabase = new UserDB();
      const videoDatabase = new VideoDB();
      const authenticationService = new AuthenticationService();
      const createVideoUC = new CreateVideoUC(userDatabase, videoDatabase);
      const token = req.headers.auth as string;
      const userId = await authenticationService.authenticate(token);
  
      const input: VideoUCInput = {
        urlVideo: req.body.urlVideo,
        urlPhotoVideo: req.body.urlPhotoVideo,
        title: req.body.title,
        desc: req.body.desc,
        userId
      };
      await createVideoUC.execute(input);
      res.status(200).send("Video criado com sucesso")

    } catch (e) {
      res.status(400).send(e.message)
    }
  };