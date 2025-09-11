import React, { useState, type ChangeEvent } from "react";


interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}


const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <div className="search-bar">
            <input
                type="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleChange}
                className="w-full"
            />
        </div>
    );

};

export default SearchBar;


// TODO: ADD SEARCH LOGIC