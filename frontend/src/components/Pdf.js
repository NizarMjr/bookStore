import React, { useState } from "react";

const Pdf = ({ book, setBook }) => {
    const [preview, setPreview] = useState('');

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setPreview(URL.createObjectURL(selectedFile))
            setBook({
                ...book,
                pdf: selectedFile,
            })
        }
    }
    return (
        <div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">أضف الكتاب</label>
                <input
                    type="file"
                    name="pdf"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border rounded-lg"
                />
            </div>
            <div className='error pdf'></div>

            {preview && (
                <div className="mb-4">
                    <iframe src={preview} width="100%" height="500px" title="PDF Preview"></iframe>
                </div>
            )}
        </div>
    )
}
export default Pdf;