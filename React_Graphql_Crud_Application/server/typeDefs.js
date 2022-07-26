import {gql} from 'apollo-server-express';


const typeDefs = gql`
scalar Date
scalar Number
type Todo{
    id:ID
    name:String
    age:Number
    date:Date
    email:String
    mobile:Number
    address:String
    state:String
    pincode:Number
    occupation:String
}
 type Query{
     welcome:String
     getTodos:[Todo]
     getTodo(id:ID):Todo
 }
 type Mutation {
     addTodo(
            name:String,
            age:Number,
            date:Date,
            email:String,
            mobile:Number,
            address:String,
            state:String,
            pincode:Number,
            occupation:String):Todo
           deleteTodo(id:ID):String
           updateTodo(id:ID,
                        name:String,
                        age:Number,
                        date:Date,
                        email:String,
                        mobile:Number,
                        address:String,
                        state:String,
                        pincode:Number,
                        occupation:String
           ):Todo
 }
`

export default typeDefs;