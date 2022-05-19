import {Request,Response} from 'express';
import { City } from '../models/cituModel';


export let getsuggetions = async (req:Request, res:Response) =>{
    const data = await City.find()

    res.status(200).json({
        "suggestions": data
      });
}



