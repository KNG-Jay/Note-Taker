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
        <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
        />
    );

};

export default SearchBar;