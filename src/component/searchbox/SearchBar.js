import React from 'react';
import './searchbox.css';
import SearchCriteriaBox from './SearchCriteriaBox';
import SearchQueryForm from './SearchQueryForm';

const SearchBar = (props) => {
   return(
       <div className="body-searchbox">
        <SearchQueryForm />
       </div>
   )
}

export default SearchBar;