import mongoose from 'mongoose';

const CreateAccountSchema = new mongoose.Schema({

    fullname: {
        type: String,
        required: true,
        
      },

      email: {
        type: String,
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

      role: {
        type: String,
        required: true,
        //default: "user"
        
      },

      status: {
        type: Boolean,
        required: true,
        
      },
},
{ timestamps: true }
);


const Account = mongoose.model('Account', CreateAccountSchema);

export default Account;
