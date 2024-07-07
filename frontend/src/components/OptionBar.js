import React from "react";
import { FaDownload } from "react-icons/fa6";
import { FaReadme } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

const OptionBar = () => {
    return (
        <div className="flex items-center justify-between my-16 sm:w-[600px] mx-auto">
            <div className="h-16 sm:w-32 w-24 rounded-full flex items-center justify-center bg-main-color text-white flex-col font-bold">
                <span>تحميل</span>
                <FaDownload />
            </div>
            <div className="h-16 sm:w-32 w-24 rounded-full flex items-center justify-center  text-main-color border border-main-color flex-col font-bold">
                <span>قراءة</span>
                <FaReadme />
            </div>
            <div className="h-16 sm:w-32 w-24 rounded-full flex items-center justify-center text-fav border border-fav flex-col font-bold">
                <span className="text-center">أضف المفضلة</span>
                <MdFavoriteBorder />
            </div>
        </div>
    )
}
export default OptionBar;