import express, {Router} from 'express';
import { getsuggetions } from '../controllers/suggetionsController';

const router:Router = express.Router();

router
  .route('/')
  .get(getsuggetions) // controller for getting suggetions
  
export {router};