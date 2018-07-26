import React from 'react';
import './body.css';
import NoticeList from '../table/NoticeList';

const Body = (props) => {
    return(
        <div className="body-main">
            <NoticeList />
        </div>
    )
}

export default Body;