import React from 'react';
import './paginator.css';
import { Pagination, Button, Icon } from 'react-materialize';

const Paginator = (props) => {
    return(
        <div className="bottom-pagination">
            <Button className="paginator-button" waves="light">이전<Icon left>arrow_back</Icon></Button>
            <Button className="paginator-button" waves="light">다음<Icon right>arrow_forward</Icon></Button>
        </div>
    )
}

export default Paginator;