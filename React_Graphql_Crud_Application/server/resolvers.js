import  Todo from './modals/Todo.js'
const resolvers = {
    Query:{
        welcome:() => {
            return 'Welcome to graphql'
        },
        getTodos:async()=>{
        const todos = await Todo.find()
        return todos
    },
     getTodo:async(root,args)=>{
        const todo = await Todo.findById(args.id)
        return todo
    },
    },
    Mutation:{
        addTodo:async(root,args)=>{
            const newTodo = new Todo({  
                                        name:args.name,
                                        age:args.age,
                                        date:args.date,
                                        email:args.email,
                                        mobile:args.mobile,
                                        address:args.address,
                                        state:args.state,
                                        pincode:args.pincode,
                                        occupation:args.occupation
                                       })
             await newTodo.save()
             return newTodo                          
        },
          deleteTodo:async(root,args)=>{
            await Todo.findByIdAndDelete(args.id)
            return"The user Deleted Sucessfully"
                                    
        },
        updateTodo:async(root,args)=>{
            const {id,name,age,date,email,mobile,address,state,pincode,occupation} = args;
            const updateTodo = {}
            if (name !== undefined) {
                updateTodo.name = name;
            }
            if (age !== undefined) {
                updateTodo.age = age;
            }
            if (date !== undefined) {
                updateTodo.date = date;
            }
             if (email !== undefined) {
                updateTodo.email = email;
            }
            if (mobile !== undefined) {
                updateTodo.mobile = mobile;
            }
            if (address !== undefined) {
                updateTodo.address = address;
            }
            if (state !== undefined) {
                updateTodo.state = state; 
            }
            if (pincode !== undefined) {
                updateTodo.pincode = pincode;
            }
            if (occupation !== undefined) {
                updateTodo.occupation = occupation;
            }
            
            const todo = await Todo.findByIdAndUpdate(id, updateTodo, {new:true});
            
            return todo;
        },

    }
 
}

export default resolvers;



