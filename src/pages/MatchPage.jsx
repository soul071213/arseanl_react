import React from 'react';
import arsenalLogo from '../photo_shirt/arsnal.png';
import evertonLogo from '../logos/everton.svg';
import manuLogo from '../logos/manu.svg';
import bonmusLogo from '../logos/bonmus.svg';
import '../match.css'
function MatchPage() {
  const scores = [
    { id: "arsenal1", score: 2 },
    { id: "arsenal2", score: 1 },
    { id: "arsenal3", score: 3 },
    { id: "evertonScore", score: 1 },
    { id: "manuScore", score: 0 },
    { id: "bonmusScore", score: 0 }
  ];

  const getScoreById = (id) => {
    const score = scores.find(item => item.id === id);
    return score ? score.score : '';
  };

  return (
    <>
      <div className="content">
        <div className="red"></div>
        <div id="mat">
          <div id="mats">
            <img src={evertonLogo} alt="Everton Logo" />
            <span id="evertonScore">{getScoreById("evertonScore")}</span>
            <h1>VS</h1>
            <span id="arsenal1">{getScoreById("arsenal1")}</span>
            <img src={arsenalLogo} alt="Arsenal Logo" />
          </div>
          <div id="mats">
            <img src={manuLogo} alt="Manchester United Logo" />
            <span id="manuScore">{getScoreById("manuScore")}</span>
            <h1>VS</h1>
            <span id="arsenal2">{getScoreById("arsenal2")}</span>
            <img src={arsenalLogo} alt="Arsenal Logo" />
          </div>
          <div id="mats">
            <img src={bonmusLogo} alt="Bournemouth Logo" />
            <span id="bonmusScore">{getScoreById("bonmusScore")}</span>
            <h1>VS</h1>
            <span id="arsenal3">{getScoreById("arsenal3")}</span>
            <img src={arsenalLogo} alt="Arsenal Logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MatchPage;
