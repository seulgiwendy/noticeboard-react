import React from 'react';
import { Input } from 'react-materialize';
import './searchbox.css';

const SearchCriteriaBox = (props) => {
    return(
        <Input s={2} type='select' label="검색기준" defaultValue='2'>
            <option value='1'>제목</option>
            <option value='2'>제목 + 내용</option>
            <option value='3'>내용</option>
        </Input>
    )
}

export default SearchCriteriaBox;