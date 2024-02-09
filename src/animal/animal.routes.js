import express from 'express'
import { deleteA, registerAnimal, updateAnimal, searchAnimal,findAnimal } from './animal.controller.js'

const api = express.Router()

api.post('/registerAnimal', registerAnimal)
api.put('/updateAnimal/:id', updateAnimal)
api.delete('/deleteAnimal/:id', deleteA)
api.get('/searchAnimal/:data', searchAnimal)
api.get('/findAnimal/', findAnimal)

export default api 