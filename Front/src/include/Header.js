import React from 'react';
import './Header.css';

function Header() {
    return (
        <article className='header'>
            <ul className='cf'>
                <li>유치원시스템</li>
                <li><button>로그인</button>
                </li>
                <li>공지사항</li>
                <li>자주묻는 질문</li>
                <li>학부모 게시판</li>
            </ul>
        </article>
    );
};

export default Header;