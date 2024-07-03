import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import ArsenalLogo from '../photo_shirt/arsnal.png';

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img className="logo2" src={ArsenalLogo} alt="Arsenal Logo" />
        </Link>
      </div>
      <div className="label_h">
        <a className="label_a" href="https://search.naver.com/search.naver?where=news&sm=tab_jum&query=%EC%95%84%EC%8A%A4%EB%82%A0">NEWS</a>
      </div>
      <div className="label_h">
        <a className="label_a" href="https://www.youtube.com/watch?v=Z1Zih6XobW4">VIDEO</a>
      </div>
      <div className="label_h">
        <Link className="label_a" to="/teams">TEAMS</Link>
      </div>
      <div className="label_h">
        <Link className="label_a" to="/history">HISTORY</Link>
      </div>
      <div className="label_h">
        <Link className="label_a" to="/match">MATCH</Link>
      </div>
    </header>
  );
}

export default Header;
