import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { PORT } from './config.js';
import systemRoutes from './system.js';



const server = express();
const port = PORT;



//cross origin resource sharing settings to make the API work
/* const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  };
  
server.use(cors(corsOptions)); */
server.use(cors());

/* server.use(express.json({limit: '50mb'}));
server.use(express.urlencoded({limit: '50mb'})) */
server.use(express.json());
/* server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json()) */

server.use('/api/system/', systemRoutes);


server.get('/', (req,res) => {
  res.json('Success');
  
})


server.listen(port || 3000);
console.log(`Server is running on ${port}`);
