import * as functions from 'firebase-functions';
import admin from 'firebase-admin';
import cors from 'cors';
import express from 'express';
import { createVideosEP } from './endpoints/createVideosEP';
import { createUserEP } from './endpoints/createUserEP';
import { getAllVideosEP } from './endpoints/getAllVideosEP';
import { getVideosDetaisEP } from './endpoints/getVideosDetailsEP';

admin.initializeApp();
const app = express();
app.use(cors({ origin: true }));

app.post('/createVideo', createVideosEP);
app.post('/createUser', createUserEP);
app.get('/allVideos', getAllVideosEP);
app.get('/videoDetails', getVideosDetaisEP)

exports.f4Api = functions.https.onRequest(app);