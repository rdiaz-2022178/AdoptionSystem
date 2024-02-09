import mongoose from "mongoose";
import ser from '../user/user.model.js'

const animalSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    colorcast:{
        type: String,
        require: true
    },
    keeper:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }

})

export default mongoose.model('animal', animalSchema)