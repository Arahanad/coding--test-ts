import express, {Request,Response,Application, application} from 'express';

const app:Application = express();
const PORT = process.env.PORT || 8000;
app.get("/", (req:Request, res:Response):void => {
    res.send("Hello Typescript with Node.js!")
  });
export {app,PORT}