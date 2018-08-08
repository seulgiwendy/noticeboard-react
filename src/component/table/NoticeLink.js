import React from 'react';
import './table.css';

const NoticeLink = (props) => {
    return(
        <tr>
            <td>{props.seq}</td>
            <td>{props.important}</td>
            <td>{props.popup}</td>
            <td><a className="notice-list-link" href="http://www.naver.com">{props.title}</a></td>
            <td>{props.name}</td>
            <td>{props.date}</td>
            <td>{props.count}</td>
        </tr>
    )
}

export default NoticeLink;