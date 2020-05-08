import admin from "firebase-admin";

export class AuthenticationService {
  async authenticate(token: string): Promise<string> {
    const decodedToken = await admin.auth().verifyIdToken(token);
    return decodedToken.uid
  }
}