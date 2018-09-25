const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PrescriptionSchema = new Schema({
    label:{
        type: String,
        required: "Please input label of medicines",
        unique: true
    },
    route:{
        type: String,
        required: "Please input rules of medicine",
    },
    expDate:{
        type: String, 
        required: "Please input expire date",
    },
    stock: Number,
    times: Number,
    schedule: [{type: Schema.Types.ObjectId, ref: 'Schedule' }],
    userId: {type: Schema.Types.ObjectId, ref: 'User' },
    isActive: Boolean
}, { timestamps : true })

const Prescription = mongoose.model('Prescription', PrescriptionSchema)

module.exports = Prescription

//bila masukan prescription yang sama, lihat lagi isActive nya, jika true: maka reject, jika false: maka update 
