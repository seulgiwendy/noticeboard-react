import React from 'react';
import './searchbox.css';
import SearchCriteriaBox from './SearchCriteriaBox';
import SearchQueryForm from './SearchQueryForm';

const SearchBar = (props) => {
   return(
       <div className="body-searchbox">
        <SearchQueryForm onSearchEvent={props.onSearchEvent}/>
       </div>
   )
}

export default SearchBar;