const express = require('express'),
      bodyParser = require('body-parser'),
      PORT = process.env.PORT || 3001;

      const app = express();
      app.use(express.json());

      app.post('/sample',function(req,res){
        const message = 'Hello,World(Post)';
        console.log(message);
        res.send(message);
      })

      app.get('/sample',function(req,res){
        const message = 'Hello,World(Get)';
        console.log(message);
        res.send(message);
      })

      app.listen(PORT,()=>{
          console.log('Server UP on '+{PORT});
      });