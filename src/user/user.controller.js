import User from './user.model.js'
import { encrypt, checkPassword, checkUpdate } from '../utils/validator.js'

export const test = (req, res) => {
    console.log('test is running')
    return res.send({ message: 'test is running' })
}

export const register = async (req, res) => {
    try {
        //capturar info
        let data = req.body
        // encriptar la contrasena
        data.password = await encrypt(data.password)
        //asignar el rol por defecto
        data.role = 'CLIENT'
        //Guardar la informacion
        let user = new User(data)
        await user.save()
        //responder al usuario
        return res.send({ message: 'Registered successfully' })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error registering user', err: err.errors })
    }
}

export const login = async (req, res) => {
    try {
        // capturar los datos
        let { username, password } = req.body
        // validar que el usuario exista
        let user = await User.findOne({ username })
        // verifico que la contrase;a coincida
        if (user && await checkPassword(password, user.password)) {
            let loggedUser = {
                username: user.name,
                name: user.name,
                role: user.role
            }

            return res.send({ message: `Welcome ${user.name}` })
        }
        return res.status(404).send({ message: 'Invalid credential' })

    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'error logged' })
    }
}

export const update = async (req, res) => {
    try {
        // obtener id del usuario a actualizar
        let { id } = req.params
        // obtener datos a actualizar
        let data = req.body
        // validar si data trae algo
        let update = checkUpdate(data, id)
        if (!update) {
            return res.status(400).send({ message: 'Have submitted some data' })
        }

        // validar si tiene permisos
        // actualizar datos (BD)
        let updatedUser = await User.findOneAndUpdate(
            { _id: id },
            data,
            { new: true } //devuelve los objetos de la BD ya actualizados 
        )
        // validar la actualizacion
        if (!updatedUser) {
            return res.status(401).send({ message: 'User not found' })
        }
        // responder al usuario
        return res.send({ message: 'updated user', })
    } catch (error) {
        console.error(error);
        if (error.keyValue.username) return res.status(400).send({ message: `Username: ${error.keyValue.username} is already exist` })
        return res.status(500).send({ message: 'error updating', updatedUser })
    }
}

export const deleteU = async (req, res) => {
    try {
        // Obtener el Id
        let { id } = req.params
        // validar si esta logeado y es el mismo user
        // eliminar
        let deleteUser = await User.findOneAndDelete({ _id: id }) // findOne me devuelve el documento eliminado
        // verificar si se elimino
        if (!deleteUser) return res.status(404).send({ message: 'Account not found and not deleted' })
        // responder
        return res.send({ message: `account with username ${deleteUser.username}` })
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'error deleting' })
    }
}