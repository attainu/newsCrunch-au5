const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name: {type:String},
    email: {type:String},
    country: {type:String},
    state:{type:String},
    city: {type:String},
    password: {type:String},
    bookmark:{type:[]} 
    
})


module.exports = mongoose.model('UserModel',userSchema);
