import { Request, Response } from 'express';
import { UserDB } from '../data/UserDB';
import { AuthenticationService } from '../services/AuthenticationService';
import { CreateUserUC, UserUCInput } from '../business/usecase/CreateUserUC';

export const createUserEP = async (req: Request, res: Response) => {
    try {
      const userDatabase = new UserDB();
      const authenticationService = new AuthenticationService();
      const createUserUC = new CreateUserUC(userDatabase);
      const token = req.headers.auth as string;
      await authenticationService.authenticate(token);
  
      const input: UserUCInput = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        nickname: req.body.nickname,
      };
      await createUserUC.execute(input);
      res.status(200).send("Usuário criado com sucesso")
    } catch (e) {
      res.status(400).send(e.message)
    }
  };