import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OptionBar from './OptionBar';
import Suggestion from './Suggestion';
import BookSections from './BookSections';

const SingleBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [suggestions, setSuggestions] = useState(null);
    const [seeMore, setSeeMore] = useState(false);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await fetch(`http://localhost:3000/books/${id}`);
                const data = await response.json();
                setBook(data.book);
                setSuggestions(data.suggestions)
            } catch (error) {
                console.error('Error fetching book:', error);
            }
        };

        fetchBook();
    }, [id]);

    const textGenerate = (description) => {
        if (description?.length > 256 && !seeMore) {
            return description.substring(0, 150) + '...';
        } else {
            return description;
        }
    }
    if (!book) {
        return <div>Loading...</div>;
    }

    const base64String = book.image
        ? btoa(String.fromCharCode(...new Uint8Array(book.image.data.data)))
        : null;

    return (
        <>
            <div className="bg-[#eee] relative mx-auto p-4">
                <BookSections />
                <div className="w-full">
                    <div className='rounded mx-auto flex flex-col items-center bg-white p-8 lg:w-1/3'>
                        <h1 className="w-full text-center p-4 bg-main-bg sm:text-3xl text-2xl font-bold mb-4">{book.name}</h1>
                        {base64String && (
                            <img
                                src={`data:${book.image.contentType};base64,${base64String}`}
                                alt={`${book.name} cover`}
                                className="rounded-lg ml-16 my-8 mx-auto"
                            />
                        )}
                        <div className=''>
                            <h2 className="mb-4 font-bold text-sm"><span className='sm:text-lg text-sm w-24 text-main-color'>مؤلف</span> : {book.author}</h2>
                            <p className="text-sm mb-4 font-bold">
                                <span className='text-lg text-sm w-24 text-main-color'>تاريخ الإصدار</span > : {new Date(book.published).toLocaleDateString()}
                            </p>
                            <p className="text-sm mb-2 font-bold"><span className='text-lg text-sm w-24 text-main-color'>قسم </span> : {book.genre}</p>
                        </div>
                    </div>
                    <div className='p-8 bg-white mt-8 rounded'>
                        <p className='text-2xl my-8'>وصف الكتاب:</p>
                        <p className="text-gray-600 mb-4"> {textGenerate(book.description)}
                            <button
                                onClick={() => setSeeMore(!seeMore)}
                                className='underline text-main-color font-bold'
                            >
                                {seeMore ? 'عرض أقل' : 'عرض المزيد...'}
                            </button></p>
                    </div>
                    {/* {book.pdf && (
                    <a
                        href={`data:${book.pdf.contentType};base64,${btoa(
                            String.fromCharCode(...new Uint8Array(book.pdf.data.data))
                        )}`}
                        download={`${book.name}.pdf`}
                        className="p-2 bg-blue-500 text-white rounded"
                    >
                        Download PDF
                    </a>
                )} */}
                </div>
                <OptionBar />
            </div>
            <Suggestion suggestions={suggestions} />
        </>
    );
};

export default SingleBook;
