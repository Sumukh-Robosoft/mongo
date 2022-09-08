const mongoose = require("mongoose");

const userSchema = new mongoose.Schema ({
    firstName :{
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    DOB : {
        type : Date,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phoneNumber :{
        type : Number,
        required : true,
    },
    address :[ {
      state:  {
            type: String,
            required:true
        },
       city:{
        type : String,
        required : true
      },
    street1:  {
        type: String,
        required:false
    },
    street2:  {
        type: String,
        required:false
    },
    street3:  {
        type: String,
        required:false
    },
    pinCode:{
        type : Number,
        required : true
      }
    }]
});
 module.exports = mongoose.model("User",userSchema);

