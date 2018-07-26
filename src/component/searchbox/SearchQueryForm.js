import React from 'react';
import { Input, Row } from 'react-materialize';
import './searchbox.css';

const SearchQueryForm = (props) => {
    return(
        <Row>
            <Input s={2} type='select' label="검색기준" defaultValue='2'>
                <option value='1'>제목</option>
                <option value='2'>제목 + 내용</option>
                <option value='3'>내용</option>
             </Input>
            <Input s={7} label="검색어를 입력하세요" />
            <Input s={3} type='select' label="정렬기준" defaultValue='2'>
                <option value='1'>등록일순</option>
                <option value='2'>등록번호순</option>
                <option value='3'>검색 유사도순</option>
             </Input>
        </Row>
    )
}

export default SearchQueryForm;