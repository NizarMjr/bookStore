import React, { useState } from "react";

const BookNews = () => {

    return (
        <main className="rounded w-full h-24 bg-white mb-4 flex items-center justify-between px-16">
            <div className={`hover:text-blue-600 cursor-pointer flex items-center flex-col`}>
                <img className="sm:w-12 w-8" src="../../assets/new_books1.svg" />
                <span className="sm:text-lg w-8">الأشهر اليوم</span>
            </div>
            <div className="hover:text-blue-600 cursor-pointer flex items-center flex-col">
                <img className="sm:w-12 w-8" src="../../assets/best_books_all_days1.svg" />
                <span className="sm:text-lg w-8">اشهر الكتب</span>
            </div>
            <div className="hover:text-blue-600 cursor-pointer flex items-center flex-col">
                <img className="sm:w-12 w-8" src="../../assets/new_books2.svg" />
                <span className="sm:text-lg w-8">أحدث الكتب</span>
            </div>
        </main>
    )
}

export default BookNews;