import {Request,Response} from 'express';
import { City } from '../models/cityModel';


export let getsuggetions = async (req:Request, res:Response) =>{

    const longitude = parseFloat("" + req.query.longitude)
    const latitude = parseFloat("" + req.query.latitude)
    const radius = parseFloat("" + req.query.radius)
    const word  = "" + req.query.q
    var sort:Record<string, | 1 | -1 | {$meta: "textScore"}>

    if(req.query.sort == "distance"){  // sort criteria selection ny dostance and name
        sort = { distance: 1 };
    }else{
        sort = { name: 1 };
    }

    const query = [ // query creation
        //Stage 1:- getting distance with formula √(x-x1)^2 + (y-y1)^2
        {
            $project: { "_id":0,"name":1,"lat":1,"long":1, distance: {$sqrt : { $add : [ { $pow: [ { $subtract: [ "$lat",latitude ] }, 2 ] }, { $pow: [ { $subtract: [ "$long", longitude ] }, 2 ] } ] }}}
        },
        //Stage 2:- getting only cities under length radius and search for provided key word 
        {
            $match:  {distance: {$lte: radius}, name:  new RegExp("^"+word) }
        },
        // Stage 3:- sorting the values by provided sort crieteria
        {
            "$sort": sort
        },
        
    ]

    const data = await City.aggregate(query)

    res.status(200).json({
        "suggestions": data // sending data via json response
    });

}



