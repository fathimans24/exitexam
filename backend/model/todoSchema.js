const mongoose = require('mongoose')
const TodoSchema = new mongoose.Schema({
    description: String,
    status: {
        type: String,
        enum: ['ongoing', 'completed', 'paused', 'canceled'], // Add more values as needed
        default: 'ongoing'}
});
module.exports=mongoose.model('tododata',TodoSchema)

