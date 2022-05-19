import express, {Request,Response,Application, application} from 'express';
import bodyParser from 'body-parser';
import {router as suggetionsRouter} from './routes/suggetionsRoutes'
import rateLimit from 'express-rate-limit'


const app:Application = express().use(bodyParser.json());

const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minutes
	max: 5, // Limit each IP to 5 requests per `window` (here, per 5 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: "Too many requests"
})

// Apply the rate limiting middleware to suggetions requests

app.use("/suggetions",limiter)
app.use("/suggetions",suggetionsRouter) // adding router middleware for /suggetions endpoint


export {app}