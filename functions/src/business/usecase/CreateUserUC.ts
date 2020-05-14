import { UserGateway } from "../gateway/UserGateway";

export interface UserUCInput {
    name: string, 
    email: string, 
    password: string, 
    confirmPassword: string,
    nickname: string
}

export class CreateUserUC {
    constructor(
      private userGateway: UserGateway
    ) {}
  
     async execute(input: UserUCInput) {
        await this.userGateway.createUser(input.name, input.email, input.password, input.confirmPassword, input.nickname)
     }
  }