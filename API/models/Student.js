const mongoose = require('mongoose')

const Student = mongoose.model('Student', {
    name: String,
    phone: Number,
    approved: Boolean,
})

module.exports = Student