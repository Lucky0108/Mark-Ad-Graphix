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

UserSchema.pre("findByIdAndUpdate", function(next) {
    console.log(JSON.stringify(this._update), this._update.password);
    // if(this._update.password) {
    //     this.hash_password = bcrypt.hashSync(this._update.password, 10);
    //     next(); 
    // } else {
    //     next();
    // }
})

module.exports = mongoose.model("User", UserSchema);