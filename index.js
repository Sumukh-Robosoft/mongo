const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/person')

const User = require("./schema");

userCreation()
updateAddress()
deleteAddress()
findAddress()

async function userCreation(){
    try{
    const user = await User.insertMany([{
    firstName : "sandesh",
    lastName : "Prabhu",
    DOB : new Date('2000-05-01'),
    email : "sandesh@gmail.com",
    phoneNumber : 9874565426,
    address :[{
        state : "karnataka",
        city : "udupi",
        pinCode : 570001
    } ],
    age : 20
    },
    {
    firstName : "vpn",
    lastName : "san",
    DOB : new Date('2000-08-01'),
    email : "vpn@gmail.com",
    phoneNumber : 9874565426,
    address :[{
        state : "karnataka",
        city : "udupi",
        street1 : "manipal",
        street2 : "manipal1",
        pinCode : 570001
    }] ,
    age : 25
    },
    {
    firstName : "sumukh",
    lastName : "r",
    DOB :new Date('2000-02-11'),
    email : "sr@gmail.com",
    phoneNumber : 9874565426,
    address :[{
        state : "karnataka",
        city : "mysuru",
        street3 : "Mys",
        pinCode : 570001
    }],
    age : 28
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
    }],
    age : 25
},
{
    firstName : "preetham",
    lastName : "u",
    DOB : new Date('2000-01-01'),
    email : "pun@gmail.com",
    phoneNumber : 9874565426,
    address :[{
        state : "karnataka",
        city : "manipal",
        pinCode : 570001
    }],    age : 25
},   
  
     ])
      console.log("user inserted successful =\n")
    }
  catch(error){
         console.log(error)
    }
}
 
async function updateAddress(){
    try{
        const updateUser = await User.findOneAndUpdate({
            firstName: "sandesh" 
        },{$set : {address :[{
            city : null
        }]}})
          
      
        console.log("update user",updateUser)
    }
    catch(error){
        console.log(error.message)
   }
}
async function findAddress(){
    try{
        const findUser = await User.find({},{_v:0},{limit:3},(documents,error)=>{
            if(documents){
                console.log(documents);
            }
            else{
                console.log(error)
            }
        })
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
