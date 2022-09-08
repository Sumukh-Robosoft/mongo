const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/person')

const User = require("./schema");

userCreation()
updateAddress()
deleteAddress()

async function userCreation(){
    try{
    const user = await User.insertMany([{
    firstName : "sandesh",
    lastName : "Prabhu",
    DOB : 21-02-2000,
    email : "sandesh@gmail.com",
    phoneNumber : 9874565426,
    address :[{
        state : "karnataka",
        city : "udupi",
        pinCode : 570001
    } ]
    },
    {
    firstName : "vpn",
    lastName : "san",
    DOB : 2000-07-11,
    email : "vpn@gmail.com",
    phoneNumber : 9874565426,
    address :[{
        state : "karnataka",
        city : "udupi",
        street1 : "manipal",
        street2 : "manipal1",
        pinCode : 570001
    }] ,
    },
    {
    firstName : "sumukh",
    lastName : "r",
    DOB : 21-02-2000,
    email : "sr@gmail.com",
    phoneNumber : 9874565426,
    address :[{
        state : "karnataka",
        city : "mysuru",
        street3 : "Mys",
        pinCode : 570001
    }]
},
{
    firstName : "prasad",
    lastName : "v",
    DOB : 21-02-2000,
    email : "pvb@gmail.com",
    phoneNumber : 9874565426,
    address :[{
        state : "karnataka",
        city : "DK",
        street1 : "udupi",
        pinCode : 570001
    }]
},
{
    firstName : "preetham",
    lastName : "u",
    DOB : 21-02-2000,
    email : "pun@gmail.com",
    phoneNumber : 9874565426,
    address :[{
        state : "karnataka",
        city : "manipal",
        pinCode : 570001
    }]
}
  
     ])
      console.log("user inserted successful =\n")
    }
  catch(error){
         console.log(error)
    }
}
 
async function updateAddress(){
    try{
        const findUser = await User.find({
            firstName: "sandesh" 
        }).update({
            address:{
                city : "banglore"
            }
        })
        console.log("updated user",findUser)
    }
    catch(error){
        console.log(error.message)
   }
}
async function deleteAddress(){
    try{
        const deleteUser = await User.findOneAndDelete({
            firstName: "vpn"
        })
        console.log("deleted user is = ",deleteUser)
    }
    catch(error){
        console.log(error.message)
   }
}
