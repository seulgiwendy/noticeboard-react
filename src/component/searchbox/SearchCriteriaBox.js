import React from 'react';
import { Dropdown, NavItem, Button } from 'react-materialize';
import './searchbox.css';

const SearchCriteriaBox = (props) => {
    return(
        <Dropdown trigger={
            <Button>검색기준</Button>
        }>
        <NavItem>제목</NavItem>
        <NavItem>제목 + 내용</NavItem>
        <NavItem>내용</NavItem>
        </Dropdown>
    )
}

export default SearchCriteriaBox;