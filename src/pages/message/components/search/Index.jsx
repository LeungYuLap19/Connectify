import React, { useContext } from 'react'
import indexStyle from './index.module.css';
import { ChatroomContext } from '../../../../context/ChatroomContext';
import useSearch from '../../hooks/useSearch';

export default function Index() {
    const { setSearchResult } = useContext(ChatroomContext);
    const { searchUser } = useSearch();

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
                placeholder='Search following users'
                onChange={(e) => handleOnChange(e.target.value.trim())}
            />
        </div>
    )
}
