import mongoose from 'mongoose';

// Define the schema for the Admin model
const AdminLoginSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        
      },

      email: {
        type: String,
        required: true,

      },

      password: {
        type: String,
        required: true,
        
      },
      
},
{ timestamps: true }
);

// Create the Admin model
const Admin = mongoose.model('Admin', AdminLoginSchema);

export default Admin;
