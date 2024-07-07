import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white py-4 w-full">
            <div className="container mx-auto text-center">
                <div className="mb-4 w-full">
                    <a href="/" className="text-white hover:text-gray-200 mx-2">الرئيسية </a>
                    <a href="/list" className="text-white hover:text-gray-200 mx-2">أقسام الكتب</a>
                    <a href="/search" className="text-white hover:text-gray-200 mx-2">البحث عن كتاب</a>
                    <a href="/contact" className="text-white hover:text-gray-200 mx-2">إتصل بنا </a>
                </div>
                <div className="text-sm">
                    © {new Date().getFullYear()} MyApp. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
