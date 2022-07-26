import mongoose from "mongoose";
const Schema = mongoose.Schema;
const todoSchema = new Schema({
    name: String,
    age:Number,
    date:Date,
    email:String,
    mobile:Number,
    address:String,
    state:String,
    pincode:Number,
    occupation:String
},{timestamps:true})

const Todo = mongoose.model('todo', todoSchema);
export default Todo;