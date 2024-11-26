import mongoose from 'mongoose';

// Define the schema for the user model
const UserLoginSchema = new mongoose.Schema({

    u_username: {
        type: String,
        required: true,
        
      },

      u_password: {
        type: String,
        required: true,
        
      },
      
},
{ timestamps: true }
);

// Create the user model
const User = mongoose.model('User', UserLoginSchema);

export default User;
