export interface UserGateway {
    getName(userId: string): Promise<string>
    createUser(name: string, email: string, password: string, confirmPassword: string, nickname: string): Promise<void>
  }