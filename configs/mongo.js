// configuracion de la base de datos

import mongoose from "mongoose"

export const connect = async()=>{
    try {
        // proceso de conexion
        mongoose.connection.on('error', ()=>{
            console.log('MongoDB | could not be connect to mongodb')
            mongoose.disconnect()
        })
        mongoose.connection.on('connecting', ()=>{
            console.log('MongoDB | try connecting')
        })
        mongoose.connection.on('connected', ()=>{
            console.log('MongoDb | connected to mongo')
        })
        mongoose.connection.on('open', ()=>{
            console.log('MongoDB | connected to database')
        })
        mongoose.connection.on('reconected', ()=>{
            console.log('MongoDB | reconected')
        })
        mongoose.connection.on('disconnected', ()=>{
            console.log('MongoDB | disconected')
        })
        
        await mongoose.connect(process.env.URI_MONGO, {
            serverSelectionTimeoutMS: 5000,
            maxPoolSize: 50
        })
        console.log('Connection success')
    } catch (error) {
        console.error('data base error',error)
    }
}
