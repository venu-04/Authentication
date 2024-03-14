import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname:{type:String,required:true},
    username:{type:String,required:true,unique:true},
    email:{type:String,lowercase: true, required: true },
    password: { type : String , required: true }  
});

const User = mongoose.model("User",userSchema);
export default User;