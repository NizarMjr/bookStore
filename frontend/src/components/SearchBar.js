import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const handleSearch = (e) => {
        const { value } = e.target;
        value && setSearch(value);
    }
    const onSubmit = async () => {
        try {
            const res = await fetch(`http://localhost:3000/search/${search}`);
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }

    }
    return (
        <form className="flex items-center justify-between w-full mb-4 relative">
            <input className="w-full rounded p-2 border border-2"
                type="text"
                placeholder="محرك البحث"
                onChange={handleSearch}
                value={search} />
            <CiSearch onClick={onSubmit} className="absolute right-4 cursor-pointer" />
        </form>
    )
}
export default SearchBar;