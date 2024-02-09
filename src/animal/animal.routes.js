import express from 'express'
import { deleteA, registerAnimal, updateAnimal } from './animal.controller.js'

const api = express.Router()

api.post('/registerAnimal', registerAnimal)
api.put('/updateAnimal/:id', updateAnimal)
api.delete('/deleteAnimal/:id', deleteA)

export default api 