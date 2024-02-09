import mongoose from "mongoose";

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
        type: Schema.ObjectId,
        require: true
    }

})

export default mongoose.model('animal', animalSchema)