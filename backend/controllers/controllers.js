const Book = require('../model/Book')

const handleError = (err) => {
    const error = {
        name: '',
        author: '',
        published: '',
        genre: '',
        description: '',
        image: '',
    }

    if (err.code === 11000) {
        error.name = 'الكتاب موجود بالفعل'
        return error;
    }
    if (err.message.includes('book validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            error[properties.path] = properties.message;
        })
        return error;
    }
}
// get all books
module.exports.books = async (req, res) => {
    const books = await Book.find({}, '-pdf -description -published -genre');
    if (books) {
        res.status(200).json(books)
        return;
    }
    res.status(400).json({ error: 'failed to fetch books' })
}
// get single book
module.exports.get_book = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id).select('-pdf');
        if (book) {
            const suggestions = await Book.find({ genre: book.genre }).select('-pdf');
            res.status(200).json({ book, suggestions })
            return;
        }
        res.status(400).json({ err: 'failed to fetch book' })
    } catch (err) {
        console.log(err);
    }
}
// get pdf of single book
module.exports.download_book = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id).select('pdf');
        if (book && book.pdf) {
            res.status(200).json(book.pdf);
            return
        }
        res.status(400).json({ err: 'fetch to download book' })
    } catch (err) {
        console.log(err);
    }
}
// search for book(s)
module.exports.search = async (req, res) => {
    try {
        const { name } = req.params;
        const books = await Book.find({ name: new RegExp(name, ('i')) }, '-pdf -description -published -genre')
        if (books.length > 0) {
            res.status(200).json(books);
            return;
        }
        res.status(400).json({ err: 'no result' });
    } catch (err) {
        console.log(err);
    }
}
module.exports.list = (req, res) => {
    res.status(200).json('list')
}

module.exports.addBook = async (req, res) => {
    const { name, author, published, genre, description } = req.body;
    try {
        const newBook = new Book({
            name,
            author,
            published,
            genre,
            description,
            image: {
                data: req.files.image ? req.files.image[0].buffer : null,
                contentType: req.files.image ? req.files.image[0].mimetype : null,
            },
            pdf: {
                data: req.files.pdf ? req.files.pdf[0].buffer : null,
                contentType: req.files.pdf ? req.files.pdf[0].mimetype : null,
            }
        });
        const book = await Book.create(newBook)
        res.status(200).json({ book: book })
    }
    catch (err) {
        const errors = handleError(err)
        res.status(400).json({ error: errors })
    }
}
module.exports.deleteBook = async (req, res) => {
    const { id } = req.params

    const book = await Book.findByIdAndDelete(id);
    if (book) {
        res.status(200).json({ message: 'book deleted' });
        return;
    }
    res.status(400).json({ err: 'cannot delete book' })
}