import React, { Component } from 'react';
import './body.css';
import NoticeList from '../table/NoticeList';
import SearchBar from '../searchbox/SearchBar';
import Paginator from '../paginator/Paginator';

class Body extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1,
            searchAfter: 0,
            sort: null,
            search: null,
            query: null,
            articelist: null
        }

        this.handleSearchClick = this.handleSearchClick.bind(this);
    }

    handleSearchClick(event) {
        let sortId = document.getElementById('sort-criteria').value;
        let searchId = document.getElementById('search-criteria').value;
        let inputQuery = document.getElementById('search-keyword').value;

        let requestEntity = {
            query: inputQuery,
            sort_criteria: sortId,
            search_criteria: searchId,
            current_page: this.state.currentPage,
            search_after: this.state.searchAfter
        };

        fetch("http://localhost:8080/api/v1/search", {
            method: 'POST',
            headers: new Headers().append('Content-Type', 'application/json;utf8'),
            body: JSON.stringify(requestEntity)
        }).then(res => {
            console.log(res);
            return res.json();
        }).then(json => {
            console.log(json);
        })
    }

    componentDidMount() {

    }

    render() {
        return(
            <div className="body-main">
                <SearchBar onSearchEvent={this.handleSearchClick}/>
                <NoticeList articles={this.state.articelist}/>
                <Paginator />
            </div>
        )
    }
}


export default Body;