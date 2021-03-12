const mongoose = require ('mongoose');
cost crypto = require('crypto');



const userSchema = new mongoose.Schema({

    username:{
        type: String,
        trim: true,
        required: true,
        maxLength: 32,
        unique: true,
        index: true,
        lowecase:true,
    },

    name:{
        type: String,
        trim: true,
        required: true,
        maxLength: 32,
        
    },

    email:{
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowecase:true,
        
    },
    profile:{
        type: String,
        required: true,
        
        
    },

    hashed_password:{
        type: String,
        required: true,
        
        
    },
    salt: String,
    about:{
        type: String
    },
    role:{
        type: Number,
        trim: true,
    },

    photo:{
        data:Buffer,
        contentType: String
    },

    resetPasswordLink: {

        data: String,
        default:'',
    }

},{timestamps: true})

module.exports = mongoose.model('User',userSchema)