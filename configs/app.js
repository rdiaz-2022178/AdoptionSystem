// configuracion del servidor express

//importaciones
import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import {config} from 'dotenv'
import userRoutes from '../src/user/user.routes.js'


const app = express()
config()
const port = process.env.PORT || 3056


app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())  //solicitudes de distintos origenes
app.use(helmet())  //seguridad basica
app.use(morgan('dev'))  //logs de solicitudes al servidor

//declaracion de rutas
app.use(userRoutes)

// levantar servidor
export const initServer = ()=>{
    app.listen(port)
    console.log(`Server Http running in port ${port}`)
}