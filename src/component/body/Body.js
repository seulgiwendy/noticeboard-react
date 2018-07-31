import React from 'react';
import './body.css';
import NoticeList from '../table/NoticeList';
import SearchBar from '../searchbox/SearchBar';
import Paginator from '../paginator/Paginator';

const Body = (props) => {
    return(
        <div className="body-main">
            <SearchBar />
            <NoticeList />
            <Paginator />
        </div>
    )
}

export default Body;