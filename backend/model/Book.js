const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const bookSchema = new Schema({
    name: {
        type: String,
        required: [true, 'الرجاء أضف اسم الكتاب  '],
        unique: true,
    },
    author: {
        type: String,
        required: [true, 'الرجاء أضف اسم المؤلف  ']
    },
    published: {
        type: Date,
        required: [true, 'الرجاء أضف  تاريخ الإصدار  ']
    },
    genre: {
        type: String,
        required: [true, 'الرجاء أضف قسم الكتاب']
    },
    description: {
        type: String,
        required: [true, 'الرجاء أضف نبذة مختصرة عن الكتاب ']
    },

    image: {
        data: {
            type: Buffer,
            required: [true, 'الرجاء أضف صورة']
        },
        contentType: {
            type: String,
            required: [true, 'الرجاء تحديد نوع صورة']
        }
    },
    pdf: {
        data: {
            type: Buffer,
        },
        contentType: {
            type: String,
        }
    }
})
const Book = mongoose.model('book', bookSchema)

module.exports = Book;