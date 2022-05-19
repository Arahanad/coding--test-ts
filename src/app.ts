import express, {Request,Response,Application, application} from 'express';
import bodyParser from 'body-parser';
import {router as suggetionsRouter} from './routes/suggetionsRoutes'


const app:Application = express().use(bodyParser.json());
const PORT = process.env.PORT || 8000;


app.use("/suggetions",suggetionsRouter)


export {app,PORT}