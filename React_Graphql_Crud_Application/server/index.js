import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import typeDefs from './typeDefs.js'
import resolvers from './resolvers.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'


async function initServer() {
    const app = express()
    app.use(cors());
    dotenv.config();
    const apolloServer = new ApolloServer({typeDefs, resolvers})
    await apolloServer.start();
    apolloServer.applyMiddleware({app})
    app.use((req,res) => {
        res.send("Server Started Successfully")
    })
    const PORT = process.env.PORT ||5000;
    try {
         await mongoose.connect(process.env.mongodb);
         console.log(`Connect to mongodb ${PORT}`)
    } catch (error) {
        console.log(error)
    }
    
    app.listen(PORT, ()=> 
    console.log(`Express server started running in port ${PORT}`))
    
}

initServer()