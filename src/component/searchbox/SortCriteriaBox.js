import React from 'react';
import { Input } from 'react-materialize';
import './searchbox.css';

const SortCriteriaBox = (props) => {
    return(
        <Input s={2} type='select' label="정렬기준" defaultValue='2' id="sort-criteria">
            <option value='1'>등록일순</option>
            <option value='2'>등록일 역순</option>
            <option value='3'>등록번호순</option>
            <option value='4'>등록번호 역순</option>
        </Input>
    )
}

export default SortCriteriaBox;