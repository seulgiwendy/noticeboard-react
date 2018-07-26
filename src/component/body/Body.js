import React from 'react';
import './body.css';
import NoticeList from '../table/NoticeList';
import SearchBar from '../searchbox/SearchBar';

const Body = (props) => {
    return(
        <div className="body-main">
            <SearchBar />
            <NoticeList />
        </div>
    )
}

export default Body;