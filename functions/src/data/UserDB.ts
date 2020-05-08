import * as admin from "firebase-admin";
import { UserGateway } from "../business/gateway/UserGateway";


export class UserDB implements UserGateway {
  async getName(userId: string): Promise<string> {
    const userDoc = await admin.firestore().collection('users').doc(userId).get();
    const userData = userDoc.data();
    if(!userData) {
      throw new Error('Usuário não encontrado')
    }
    return userData.name
  }
}