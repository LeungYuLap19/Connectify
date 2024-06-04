import React, { useEffect, useState } from 'react'
import indexStyle from './index.module.css';
import Item from '../item/Index';
import fuzzysort from 'fuzzysort';

export default function Index({ setPopup, setList, list }) {
    const [usersList, setUsersList] = useState([]);

    const handleSearch = (input) => {
        if (input) {
            const results = fuzzysort.go(input, usersList, { key: 'username' });
            let searchResults = [];
            results.map(result => {
                searchResults.push(result.obj);
            })

            setUsersList(searchResults);
        }
        else {
            setUsersList(list);
        }
    }

    useEffect(() => {
        setUsersList(list);
    }, []);

    return (
        <div className={indexStyle['container']}>
            <div className={indexStyle['search']}>
                <input 
                type="search"
                placeholder='Search'
                onChange={(e) => handleSearch(e.target.value)} />

                <button onClick={() => {
                    setPopup(false);
                    setList(null);
                }}>
                    <img src="\assets\images\close.png" alt="close" />
                </button>
            </div>  

            <div className={indexStyle['list']}>
                {
                    usersList &&
                    usersList.map((userData, index) => {
                        return (
                            <Item key={index} userData={userData} setPopup={setPopup} setList={setList} />
                        )
                    })
                }
            </div>
        </div>
    )
}
