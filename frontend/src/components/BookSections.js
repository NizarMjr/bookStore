import React from "react";
import { FaBook } from "react-icons/fa";

const BookSections = () => {
    return (
        <section className="absolute hidden lg:block top-4 left-2 w-68 h-auto rounded p-4 bg-white">
            <h2 className="text-2xl font-bold mb-4">أقسام الكتب</h2>
            <div>
                <div className="flex items-center justify-between">
                    <span className="text-lg mb-2 cursor-pointer">الروايات والقصص الأدبية</span>
                    <FaBook className="text-blue-600" />
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-lg mb-2 cursor-pointer">التنمية البشرية وتطوير الذات</span>
                    <FaBook className="text-blue-600" />
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-lg mb-2 cursor-pointer">الديانة الإسلامية</span>
                    <FaBook className="text-blue-600" />
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-lg mb-2 cursor-pointer">التاريخ</span>
                    <FaBook className="text-blue-600" />
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-lg mb-2 cursor-pointer">الأدب</span>
                    <FaBook className="text-blue-600" />
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-lg mb-2 cursor-pointer">علم الفلسفة والمنطق</span>
                    <FaBook className="text-blue-600" />
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-lg mb-2 cursor-pointer">تفسير القرآن الكريم</span>
                    <FaBook className="text-blue-600" />
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-lg mb-2 cursor-pointer">العقيدة الإسلامية</span>
                    <FaBook className="text-blue-600" />
                </div>
            </div>
        </section>
    )
}

export default BookSections;