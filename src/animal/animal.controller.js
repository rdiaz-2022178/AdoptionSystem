import Animal from './animal.model.js'


export const registerAnimal = async (req, res) => {
    try {
        //capturar info
        let data = req.body
        let animal = new Animal(data)
        await animal.save()
        //responder al usuario
        return res.send({ message: 'Registered successfully' })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error registering animal', err: err.errors })
    }
}

export const findAnimal = async (req, res) => {
    try {

    } catch (error) {
        console.error(error)
        return res.status(500).send({ message: 'Error ', err: error.errors })
    }
}

export const updateAnimal = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body
        let updateAnimal = await Animal.findOneAndUpdate(
            { _id: id },
            data,
            { new: true }
        )
        return res.send({ message: 'updated animals', })
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'error updating' })

    }
}

export const deleteA = async (req, res) => {
    try {
        let { id } = req.params
        let deleteAnimal = await Animal.findOneAndDelete({ _id: id }) // findOne me devuelve el documento eliminado
        // verificar si se elimino
        if (!deleteAnimal) return res.status(404).send({ message: 'Animal not found and not deleted' })
        // responder
        return res.send({ message: `Animal with name ${deleteAnimal.name}` })
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'error deleting' })
    }
}