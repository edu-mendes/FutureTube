export interface UserGateway {
    getName(userId: string): Promise<string>
  }