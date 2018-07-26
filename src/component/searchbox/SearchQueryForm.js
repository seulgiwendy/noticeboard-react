import React from 'react';
import { Input, Row } from 'react-materialize';
import './searchbox.css';
import SearchCriteriaBox from './SearchCriteriaBox';
import SortCriteriaBox from './SortCriteriaBox';

const SearchQueryForm = (props) => {
    return(
        <Row>
            <SearchCriteriaBox />
                <Input s={7} label="검색어를 입력하세요" />
            <SortCriteriaBox />
        </Row>
    )
}

export default SearchQueryForm;