import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import inquiryRoute from "./routes/inquiryRoute.js";
import cors from "cors";
import UserModel from "./models/UserModel.js";
import Inquiry from "./models/inquiryModel.js";

const app = express();

// Middleware for parsing request body
app.use(express.json());


app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome To MERN Stack Tutorial");
});

app.post("/user", (req, res) => {
  const { fullname, email, password } = req.body;


  UserModel.create({ fullname, email, password })
    .then((user) => res.json("Success"))
    .catch((err) => res.json(err));
});

//login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  UserModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        
        if (password === user.password) {
          return res.json({ status: "Success", role: user.role });
        } else {
          return res.json("The password is incorrect");
        }
      } else {
       
        return res.status(404).json("This user doesn't exist");
      }
    })

    .catch((err) => {
      console.error(err);
      return res.status(500).json("Error occurred");
    });
});

//show inquiry details
app.get("/inquiry/details/:id", async(req, res) => {
  let id = req.params.id;
  try {
    const inquiry = await Inquiry.findById(id);
    if (inquiry) {
      res.status(200).send({ status: "inquiry fetched", inquiry });
    } else {
      res.status(404).send({ status: "inquiry not found" });
    }
  } catch (err) {
    console.error(err.message);
    res
      .status(500)
      .send({ status: "Error fetching inquiry", error: err.message });
  }
});

/* ****** */
app.get('/status/:status', async (req, res) => {
  try {
      const inquiry = await Inquiry.find({ status: req.params.status });
      res.status(200).json(inquiry); // Ensure an array is sent
  } catch (err) {
      res.status(500).json({ error: 'Failed to fetch inquiries' });
  }
});
/* ****** */


app.use("/inquiry", inquiryRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
