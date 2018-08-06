import React from 'react';
import './header.css';
import { Button, Modal } from 'react-materialize';

const Header = (props) => {
    return(
        <div className="main-header">
            <img className="header-img" src="https://ssl.pstatic.net/imgshopping/adcenter/web/ico-shopping.png" width="117" height="22"/>
            <Modal id="new-article" header="새 글 등록" trigger={<Button className="header-newarticle">공지 등록</Button>}>
                <iframe className="new-article-editorbox" src="https://m.naver.com" />
            </Modal>
        </div>

    )
}

export default Header;