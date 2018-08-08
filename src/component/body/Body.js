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
            sort: null,
            articlecount: 0,
            articlelist: [
                {seq: 275337, important: "y", popup: "y", title:"[안내]김준현 설렁탕 특으로 먹는다", name:"이말년", date:"2018.01.01 12:34:56", count:1234},
                {seq: 275337, important: "y", popup: "y", title:"[안내]김준현 설렁탕 특으로 먹는다", name:"이말년", date:"2018.01.01 12:34:56", count:1234},
                {seq: 275337, important: "y", popup: "y", title:"[안내]김준현 설렁탕 특으로 먹는다", name:"이말년", date:"2018.01.01 12:34:56", count:1234},
                {seq: 275337, important: "y", popup: "y", title:"[안내]김준현 설렁탕 특으로 먹는다", name:"이말년", date:"2018.01.01 12:34:56", count:1234},
                {seq: 275337, important: "y", popup: "y", title:"[안내]김준현 설렁탕 특으로 먹는다", name:"이말년", date:"2018.01.01 12:34:56", count:1234},
                {seq: 275337, important: "y", popup: "y", title:"[안내]김준현 설렁탕 특으로 먹는다", name:"이말년", date:"2018.01.01 12:34:56", count:1234},
                {seq: 275337, important: "y", popup: "y", title:"[안내]김준현 설렁탕 특으로 먹는다", name:"이말년", date:"2018.01.01 12:34:56", count:1234}
            ]
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

        let headerPreset = new Headers();
        headerPreset.append('Content-Type', 'application/json;utf8');

        fetch("http://localhost:8080/api/v1/search", {
            method: 'POST',
            headers: headerPreset,
            body: JSON.stringify(requestEntity)
        }).then(res => {
            console.log(res);
            return res.json();
        }).then(json => {
            this.setState({
                query: inputQuery,
                sort: sortId,
                search: searchId,
                currentPage: json.current_page,
                searchAfter: json.search_after,
                articlelist: json.articles,
                articlecount: json.article_count
            });
        });
    }

    componentDidMount() {

    }

    render() {
        console.log(this.state);
        return(
            <div className="body-main">
                <SearchBar onSearchEvent={this.handleSearchClick}/>
                <NoticeList articles={this.state.articlelist}/>
                <Paginator />
            </div>
        )
    }
}


export default Body;