import React, { useContext, useEffect, useRef } from 'react'
import indexStyle from './index.module.css'
import useSearch from './../../hooks/useSearch';
import { SearchContext } from '../../../../context/SearchContext';

export default function Index() {
    const { setSearchResult } = useContext(SearchContext);
    const { searchUser } = useSearch();
    const searchRef = useRef(null);

    useEffect(() => {
        searchRef.current.focus();
    }, []);

    const handleOnChange = (input) => {
        if (input) {
            searchUser(input);
        }
        else {
            setSearchResult(null);
        }
    }

    return (
        <div className={indexStyle['container']}>
            <input 
                type="search" 
                placeholder='Search'
                ref={searchRef}
                onChange={(e) => handleOnChange(e.target.value.trim())}
            />
            <button>
                <img src="\assets\images\search-box.png" alt="search-icon" />
            </button>
        </div>
    )
}
