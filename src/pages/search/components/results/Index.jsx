import React, { useContext } from 'react'
import indexStyle from './index.module.css'
import { SearchContext } from '../../../../context/SearchContext'
import UserTag from '../../../../common/components/userTag/Index';

export default function Index() {
    const { searchResult } = useContext(SearchContext);

    return (
        <div className={indexStyle['container']}>
            {
                searchResult &&
                <div className={indexStyle['wrapper']}>
                    {
                        searchResult.map((user, index) => {
                            return (
                                <div key={index} className={indexStyle['item']}>
                                    <UserTag clickable={true} userData={user}/>
                                </div>
                            );
                        })
                    }
                </div>
            }
            
        </div>
    )
}
