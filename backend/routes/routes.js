const { Router } = require('express')
const router = Router();
const multer = require('multer');
const controllers = require('../controllers/controllers')


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadFields = upload.fields([{ name: 'image', maxCount: 1 }, { name: 'pdf', maxCount: 1 }]);

router.get('/books', controllers.books) // get all books
router.get('/books/:id', controllers.get_book) // get single book
router.get('/book/download/:id', controllers.download_book) // get pdf of single book
router.get('/search/:name', controllers.search) // search for book(s)
router.post('/admin/add', uploadFields, controllers.addBook)
router.delete('/admin/delete/:id', controllers.deleteBook)

module.exports = router