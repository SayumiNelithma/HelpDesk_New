import mongoose from 'mongoose';

const CreateAccountSchema = new mongoose.Schema({

    fullname: {
        type: String,
        required: true,
        
      },

      address: {
        type: String,
        required: true,

      },

      email: {
        type: String,
        required: true,
        
      },
      dob: {
        type: Date,
        required: true,

      },

      gender: {
        type: String,
        required: true
      },

      phonenumber: {
        type: Number,
        required: true,
        
      },

      USERNAME: {
        type: String,
        required: true,

      },

      PASSWORD: {
        type: String,
        required: true,

      },
},
{ timestamps: true }
);


const Account = mongoose.model('Account', CreateAccountSchema);

export default Account;
