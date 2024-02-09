import Animal from './animal.model.js'

export const newAnimal = async (req, res)=>{
    try {
        let data = req.body
        let animal = new Animal(data) 
        await animal.save()
        return res.send({message: 'Register succerf'})
    } catch (error) {
        console.error(error);
        return res.status(500).send({message: 'Error register'})
    }
}