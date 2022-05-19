import {app} from './app'
import mongoose from 'mongoose';

const DB = "mongodb://localhost:27017/test"
const PORT = process.env.PORT || 8000;

mongoose // mongodb connection with mongoose
  .connect(DB,{})
  .then(con => {
    console.log("db connected successfully");
  })
  .catch(err => {
    console.log("Error connecting to DB" + err);
  });


app.listen(PORT, ():void => {
console.log(`Server Running here 👉 https://localhost:${PORT}`);
});

export {app}