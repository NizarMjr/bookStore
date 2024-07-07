import React, { useState } from 'react';

const ImageUpload = ({ book, setBook }) => {
    const [preview, setPreview] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setPreview(URL.createObjectURL(selectedFile))
            setBook({
                ...book,
                image: selectedFile,
            })
        }
    };

    return (
        <div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">أضف صورة</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border rounded-lg"
                />
            </div>
            <div className='error image'></div>

            {preview && (
                <div className="mb-4">
                    <img src={preview} alt="Image Preview" className="w-full h-auto rounded-lg" />
                </div>
            )}
        </div>
    );
};

export default ImageUpload;
