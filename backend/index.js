import express, { response } from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
//import Inquiry from './models/inquiryModel.js';
import inquiryRoute from './routes/inquiryRoute.js';
//import UserRoute from './routes/UserRoute.js';
import cors from 'cors';
import bcrypt from 'bcrypt'
import UserModel from './models/UserModel.js';


const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
//app.use(cors());
// Option 2: Allow Custom Origins
app.use(
   cors({
     origin: 'http://localhost:3000',
     methods: ['GET', 'POST'],
     credentials: true
   })
 );

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});


// app.post('/user', (req, res) => {
//   const {fullname, email, password} = req.body;
//   bcrypt.hash(password, 10)
//   .then(hash => {
//     UserModel.create({fullname, email, password: hash})
//     .then(user => res.json("Success"))
//     .catch(err => res.json(err))
//   }).catch(err => res.json(err))
// })

app.post('/user', (req, res) => {
  const { fullname, email, password } = req.body;

  // Directly create the user with the plain password
  UserModel.create({ fullname, email, password })
    .then(user => res.json("Success"))
    .catch(err => res.json(err));
});


app.post('/login', (req, res) => {
  const { email, password } = req.body;

  UserModel.findOne({ email: email })
    .then(user => {
      if (user) {
        bcrypt.compare(password, user.password, (err, response) => {
          if (err) {
            return res.status(500).json("Error comparing passwords");
          }
          if (response) {
            return res.json("Login successful");
          } else {
            return res.json("The password is incorrect");
          }
        });
      } else {
        // If no user is found, return an appropriate response
        return res.status(404).json("No record existed");
      }
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json("Error occurred");
    });
});



app.use('/inquiry', inquiryRoute);



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