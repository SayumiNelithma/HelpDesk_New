import express, { request, response } from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
//import Inquiry from './models/inquiryModel.js';
import inquiryRoute from './routes/inquiryRoute.js';
import AdminLoginRoute from './routes/AdminLoginRoute.js';
import CreateAccountRoute from './routes/CreateAccountRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//    cors({
//      origin: 'http://localhost:3000',
//      methods: ['GET', 'POST', 'PUT', 'DELETE'],
//      allowedHeaders: ['Content-Type'],
//    })
//  );

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});

app.use('/inquiry', inquiryRoute);
app.use('/admin', AdminLoginRoute);
app.use('/admin', CreateAccountRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });