import mongoose from "mongoose"

export const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,

    },
    surname: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        minLength: [8, 'Passwots must be 8 characters'],
        requiere: true
    },
    email:{
        type: String,
        require: true
    },
    phone:{
        type: String,
        minLength: 8,
        maxLength: 8,
        require: true
    },
    role:{
        type: String,
        uppercase: true,
        enum: ['ADMIN', 'CLIENT'],
        require: true
    }
})

export default mongoose.model('user', userSchema)