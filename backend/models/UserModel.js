import mongoose from 'mongoose';

const UserScehma = new mongoose.Schema({

    fullname: {
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

      role: {
        type: String,
        default: "user"
        
      },

      // status: {
      //   type: Boolean,
      //   required: true,
        
      // },
},
{ timestamps: true }
);


const UserModel = mongoose.model('user', UserScehma);

export default UserModel;
