import React from 'react';
import { Input, Row, Autocomplete, Button } from 'react-materialize';
import './searchbox.css';
import SearchCriteriaBox from './SearchCriteriaBox';
import SortCriteriaBox from './SortCriteriaBox';

const SearchQueryForm = (props) => {
    return(
        <Row>
            <SearchCriteriaBox />
                <Autocomplete s={6} title="검색어를 입력하세요" data={
                    {
                        '네이버': null,
                        '공지': null,
                        "naver": null,
                        "퇴점": null
                    }
                }/>
            <SortCriteriaBox />
            <Button className="search-button" s={2}>검색</Button>
        </Row>
    )
}

export default SearchQueryForm;