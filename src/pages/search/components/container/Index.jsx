import React, { useState } from 'react'
import indexStyle from './index.module.css'
import { SearchContext } from '../../../../context/SearchContext'
import SearchBar from '../searchBar/Index';
import Results from '../results/Index';
import Discovery from '../discovery/Index';

export default function Index() {
  const [searchResult, setSearchResult] = useState(null);

  return (
    <div className={indexStyle['container']}>
      <SearchContext.Provider value={{ searchResult, setSearchResult }}>
        <div className={indexStyle['wrapper']}>
          <div className={indexStyle['search-bar']}>
            <SearchBar />
          </div>
          {/* <div className={indexStyle['discover']}>
            <Discovery />
          </div> */}
        </div>
        <div className={indexStyle['search-result']}>
          <Results />
        </div>
      </SearchContext.Provider>
    </div>
  )
}
