import React from 'react';

const TableHead = (props) => {
    return(
        <thead>
            <th data-field="seq">등록번호</th>
            <th data-field="important">중요</th>
            <th data-field="ispopup">팝업</th>
            <th data-field="title">제목</th>
            <th data-field="user">등록자</th>
            <th data-field="rgstymdt">등록년월</th>
        </thead>
    )
}

export default TableHead;