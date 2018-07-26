import React from 'react';
import { Input } from 'react-materialize';
import './searchbox.css';

const SortCriteriaBox = (props) => {
    return(
        <Input s={3} type='select' label="정렬기준" defaultValue='2'>
            <option value='1'>등록일순</option>
            <option value='2'>등록번호순</option>
            <option value='3'>검색 유사도순</option>
        </Input>
    )
}

export default SortCriteriaBox;