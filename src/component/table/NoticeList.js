import React from 'react';
import { Table } from 'react-materialize';
import TableHead from './TableHead';
import NoticeLink from './NoticeLink';

const NoticeList = (props) => {
    return(
        <Table centered={false} hoverable={true} bordered={true}>
            <TableHead />
            <tbody>
                <NoticeLink/>
                <NoticeLink/>
                <NoticeLink/>
                <NoticeLink/>
                <NoticeLink/>
            </tbody>
        </Table> 
    )

}

export default NoticeList;