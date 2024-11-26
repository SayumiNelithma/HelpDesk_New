import mongoose from 'mongoose';

// Define the schema for the inquiry model
const inquirySchema = new mongoose.Schema({
    requestType: {
        type: String,
        required: true,
        enum: [
          "IT Issue",
          "Software Installation",
          "Password Reset",
          "Hardware Issue",
          "Service Access Request",
          "Bug Report",
          "Feature Request",
          "Feedback or Suggestion",
          "Other",
        ],
      },

      requestDate: {
        type: Date,
        required: true,
      },

      priority: {
        type: String,
        required: true,
        enum: ["Low", "Medium", "High", "Urgent"],
      },

      subject: {
        type: String,
        required: true,
        maxlength: 100,
      },

      description: {
        type: String,
        required: true,
      },
},
{ timestamps: true }
);

// Create the Book model
const Inquiry = mongoose.model('Inquiry', inquirySchema);

export default Inquiry;
