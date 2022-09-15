const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/person')

const User = require("./schema");

userCreation()
updateAddress()
deleteUser()
findAll()

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
    },
    {
        state : "karnataka",
        city : "udupi",
        street1 : "manipal",
        street2 : "manipal1",
        pinCode : 570001
    } ,
] ,
    age : 20
    },
    {
    firstName : "vpn",
    lastName : "san",
    DOB : new Date('2000-08-01'),
    email : "vpn@gmail.com",
    phoneNumber : 9874565426,
    address :{
        state : "karnataka",
        city : "udupi",
        street1 : "manipal",
        street2 : "manipal1",
        pinCode : 570001
    } ,
    age : 25
    },
    {
    firstName : "sumukh",
    lastName : "r",
    DOB :new Date('2000-02-11'),
    email : "sr@gmail.com",
    phoneNumber : 9874565426,
    address :{
        state : "karnataka",
        city : "mysuru",
        street3 : "Mys",
        pinCode : 570001
    },
    age : 28
},
{
    firstName : "prasad",
    lastName : "v",
    DOB : 21-02-2000,
    email : "pvb@gmail.com",
    phoneNumber : 9874565426,
    address :{
        state : "karnataka",
        city : "DK",
        street1 : "udupi",
        pinCode : 570001
    },
    age : 25
},
{
    firstName : "preetham",
    lastName : "u",
    DOB : new Date('2000-01-01'),
    email : "pun@gmail.com",
    phoneNumber : 9874565426,
    address :{
        state : "karnataka",
        city : "manipal",
        pinCode : 570001
    },    age : 25
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
        },{$set : {address :{
            state: "TN",
            city : "banglore",
            street1 : null,
            street2:null,
            street3 : "maipal",
            pinCode : 123456
        }}})
          
      
        console.log("updated user",updateUser)
    }
    catch(error){
        console.log(error.message)
   }
}

async function findAll(){
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
async function deleteUser(){
    try{
        const deleteUser = await User.findOneAndDelete({
            firstName: "sandesh"
        })
        console.log("deleted user is = ",deleteUser)
    }
    catch(error){
        console.log(error.message)
   }
}
 
findUserById()
async function findUserById(){
    try {
        const userId = User.findByIdAndRemove({_id:mongoose.Types.ObjectId('6322ed75c701f5d1feb1385f')},function(error,data){
            if(error) console.log(error)
            console.log(data)
        })
    }
    catch(error){
        console.log(error)
    }
}

updateById()
async function updateById(){
    try{
        let stateUpdate = await User.updateOne({"address._id":"6322ed75c701f5d1feb1385f"},{$set:{"address.$.state":"mysuru"}})
        console.log(stateUpdate)
    }
    catch(error){
        console.log(error);
    }
}

popAddress()
async function popAddress(){
    try{
        const deleteCity = await User.updateOne({
            firstName: "preetham" 
        },{$pull : { address:{
            city:"Manipal"
        }}})
          
      
        console.log("Pop city",deleteCity)
    }
    catch(error){
        console.log(error.message)
   }
}


//Aggregation
// const agg = [
//     {
//       '$project': {
//         '_id': 1, 
//         'firstName': 1, 
//         'lastName': 1, 
//         'age': 1, 
//         'address.state': 1, 
//         'address.city': 1
//       }
//     }, {
//       '$match': {
//         'address.state': 'karnataka', 
//         'age': {
//           '$gt': 20
//         }
//       }
//     }, {
//       '$group': {
//         '_id': '$address.city', 
//         'groupAge': {
//           '$avg': '$age'
//         }, 
//         'maxAge': {
//           '$max': '$age'
//         }, 
//         'minAge': {
//           '$min': '$age'
//         }
//       }
//     }, {
//       '$sort': {
//         'maxAge': -1
//       }
//     }, {
//       '$count': 'count'
//     }
//   ];
  
//   const client = await MongoClient.connect(
//     'mongodb://localhost:27017/',
//     { useNewUrlParser: true, useUnifiedTopology: true }
//   );
//   const coll = client.db('person').collection('users');
//   const cursor = coll.aggregate(agg);
//   const result = await cursor.toArray();
//   await client.close();