import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import Pdf from './Pdf';

const BookForm = () => {
    const [book, setBook] = useState({
        name: '',
        author: '',
        published: '',
        genre: '',
        description: '',
        image: null,
        pdf: null,
    });

    const setErrors = (error) => {
        const { name, author, published, genre, description, image: { data } } = error;
        console.log(data);
        document.querySelector('.error.name').textContent = name;
        document.querySelector('.error.author').textContent = author;
        document.querySelector('.error.published').textContent = published;
        document.querySelector('.error.genre').textContent = genre;
        document.querySelector('.error.description').textContent = description;
        document.querySelector('.error.image').textContent = data;

    }

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setBook({
            ...book,
            [name]: files ? files[0] : value,
        });
    };
    const addBook = async (book) => {
        const formData = new FormData();

        for (let key in book) {
            formData.append(key, book[key])
        }

        try {
            const res = await fetch('http://localhost:3000/admin/add', {
                method: 'POST',
                body: formData,
            })
            const data = await res.json();
            console.log(data);
            if (data.error) {
                setErrors(data.error)
            } else {
                setBook({
                    name: '',
                    author: '',
                    published: '',
                    genre: '',
                    description: '',
                    image: null,
                    pdf: null,
                });
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(book)
    };

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="direction-rtl max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">أضف كتاب</h2>

            <div className="mb-4">
                <label className="block text-gray-700">اسم الكتاب </label>
                <input
                    type="text"
                    name="name"
                    value={book.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                />
                <div className='error name'></div>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">المؤلف </label>
                <input
                    type="text"
                    name="author"
                    value={book.author}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                />
                <div className='error author'></div>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">تاريخ الإصدار</label>
                <input
                    type="date"
                    name="published"
                    value={book.published}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                />
                <div className='error published'></div>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">قسم</label>
                <input
                    type="text"
                    name="genre"
                    value={book.genre}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                />
                <div className='error genre'></div>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">وصف الكتاب</label>
                <textarea
                    name="description"
                    value={book.description}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                    rows="4"
                ></textarea>
                <div className='error description'></div>
            </div>
            <ImageUpload book={book} setBook={setBook} />
            <Pdf book={book} setBook={setBook} />
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg">
                Add Book
            </button>
        </form>
    );
};

export default BookForm;
