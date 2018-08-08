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
                {props.articles.map(article => {
                    return <NoticeLink seq={article.seq} important={article.is_important ? 'y' : 'n'} popup={article.is_popup ? 'y' : 'n'} title={article.title} name={article.registered_user} date={article.registered_date} count={article.read_count} />
                })}
            </tbody>
        </Table> 
    )

}

export default NoticeList;