import React from 'react';
import { Table } from 'react-materialize';
import TableHead from './TableHead';
import NoticeLink from './NoticeLink';

const testArticles = [
    {seq: 275337, important: "y", popup: "y", title:"[안내]김준현 설렁탕 특으로 먹는다", name:"이말년", date:"2018.01.01 12:34:56", count:1234},
    {seq: 275337, important: "y", popup: "y", title:"[안내]김준현 설렁탕 특으로 먹는다", name:"이말년", date:"2018.01.01 12:34:56", count:1234},
    {seq: 275337, important: "y", popup: "y", title:"[안내]김준현 설렁탕 특으로 먹는다", name:"이말년", date:"2018.01.01 12:34:56", count:1234},
    {seq: 275337, important: "y", popup: "y", title:"[안내]김준현 설렁탕 특으로 먹는다", name:"이말년", date:"2018.01.01 12:34:56", count:1234},
    {seq: 275337, important: "y", popup: "y", title:"[안내]김준현 설렁탕 특으로 먹는다", name:"이말년", date:"2018.01.01 12:34:56", count:1234},
    {seq: 275337, important: "y", popup: "y", title:"[안내]김준현 설렁탕 특으로 먹는다", name:"이말년", date:"2018.01.01 12:34:56", count:1234},
    {seq: 275337, important: "y", popup: "y", title:"[안내]김준현 설렁탕 특으로 먹는다", name:"이말년", date:"2018.01.01 12:34:56", count:1234}
]

const NoticeList = (props) => {
    return(
        <Table centered={false} hoverable={true} bordered={true}>
            <TableHead />
            <tbody>
                {testArticles.map(article => {
                    return <NoticeLink seq={article.seq} important={article.important} popup={article.popup} title={article.title} name={article.name} date={article.date} count={article.count} />
                })}
            </tbody>
        </Table> 
    )

}

export default NoticeList;