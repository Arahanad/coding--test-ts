import {app,PORT} from './app'




  app.listen(PORT, ():void => {
    console.log(`Server Running here 👉 https://localhost:${PORT}`);
  });