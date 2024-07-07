import React from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";

const Favorite = ({ index }) => {
    const addFavorite = (id1, id2) => {
        document.getElementById(id1).classList.add('hidden');
        document.getElementById(id2).classList.remove('hidden');
    }
    const removeFavorite = (id1, id2) => {
        document.getElementById(id1).classList.add('hidden');
        document.getElementById(id2).classList.remove('hidden');
    }
    return (
        <div>
            <MdOutlineFavoriteBorder id={`add${index}`} onClick={() => addFavorite(`add${index}`, `remove${index}`)} className='cursor-pointer text-2xl text-fav absolute top-4 left-4' />
            <MdOutlineFavorite id={`remove${index}`} onClick={() => removeFavorite(`remove${index}`, `add${index}`)} className='hidden cursor-pointer text-2xl text-fav absolute top-4 left-4' />
        </div>
    )
}
export default Favorite;