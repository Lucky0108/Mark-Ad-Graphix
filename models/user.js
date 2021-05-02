const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const UserSchema =  new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        trim: true,
        maxlength: 20
    },
    lastName: {
        type: String,
        trim: true,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    hash_password:{
        type: String,
        required: true
    }
},{ timestamps: true });

UserSchema.virtual("password")
.set(function(password){
    this.hash_password = bcrypt.hashSync(password, 10);
})

UserSchema.methods = {
    authenticate: function(password) {
        return bcrypt.compareSync(password, this.hash_password); 
    }
}

module.exports = mongoose.model("User", UserSchema);