import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookSections from "./BookSections";
import BookNews from "./BookNews";
import Favorite from "./Favorite";
import RecentBooks from "./RecentBooks";

const Content = () => {
    const [books, setBooks] = useState();
    const fetchBooks = async () => {
        try {
            const res = await fetch('http://localhost:3000/books')
            const data = await res.json();
            console.log(data);
            setBooks(data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchBooks();
    }, [])

    const getImageSrc = (image) => {
        if (image && image.data && image.contentType) {
            // Convert buffer to base64 string
            const base64String = btoa(
                String.fromCharCode(...new Uint8Array(image.data.data))
            );
            return `data:${image.contentType};base64,${base64String}`;
        }
        return '';
    };
    const getPdfSrc = (pdf) => {
        if (pdf && pdf.data && pdf.contentType) {
            // Convert buffer to base64 string
            const base64String = btoa(
                String.fromCharCode(...new Uint8Array(pdf.data.data))
            );
            return `data:${pdf.contentType};base64,${base64String}`;
        }
        return '';
    };

    return (
        <main className="bg-main-bg mx-auto sm:p-4">
            <RecentBooks />
            <div className="container relative">
                {books && <BookSections />}
                <main className="p-4 w-[calc(100%-300px)] max-lg:w-full max-lg:mx-auto">
                    {books && <BookNews />}
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {books?.map((book, index) => (
                            <div key={index} className="border p-4 rounded-lg shadow-lg text-center bg-white transform transition-transform duration-500 hover:-translate-y-2">
                                <Favorite index={book.name} />
                                {book.image && (
                                    <Link to={`/book/${book._id}`}>
                                        <img
                                            src={getImageSrc(book.image)}
                                            alt={`${book.name} cover`}
                                            className="sm:h-56 h-48 rounded-lg my-4 mx-auto cursor-pointer"
                                        />
                                    </Link>
                                )}
                                <div className="flex flex-col space-y-2">
                                    <span className="text-main-color mb-8 mt-4 sm:text-xl font-bold">{book.name}</span>
                                    <span className="">{book.author}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </main>
    )
}
export default Content;