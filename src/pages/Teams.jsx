import React from 'react';
import '../a_teams.css'
import ramsdaleImg from '../members/ramsdale.webp';
import salibaImg from '../members/saliba.webp';
import tomiyasuImg from '../members/tomiyasu.webp';
import zinchenkoImg from '../members/zinchenko.webp';
import holdingImg from '../members/holding.webp';
import jesusImg from '../members/jesus.webp';
import jorjinhoImg from '../members/jorjinho.webp';
import partyImg from '../members/party.webp';
import sakaImg from '../members/saka.webp';
import trossardImg from '../members/trossard.webp';
import odegaardImg from '../members/Odegaard.webp';
import artedaImg from '../members/arteda.webp';
import jusulpanImg from '../photo_shirt/jusulpan.png';

function Teams() {
  return (
    <>
      <div className="content">
        <div className="red"></div>
        <div className="teams">

          {/* 링크 및 이미지 예시 */}
          <a target="_blank" rel="noopener noreferrer" href="https://namu.wiki/w/%EC%95%84%EB%A1%A0%20%EB%9E%A8%EC%8A%A4%EB%8D%B0%EC%9D%BC">
            <img className="ramsdale" src={ramsdaleImg} alt="Aaron Ramsdale" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://namu.wiki/w/%EC%9C%8C%EB%A6%AC%EC%97%84%20%EC%82%B4%EB%A6%AC%EB%B0%94">
            <img className="saliba" src={salibaImg} alt="William Saliba" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://namu.wiki/w/%ED%86%A0%EB%AF%B8%EC%95%BC%EC%8A%A4%20%ED%83%80%EC%BC%80%ED%9E%88%EB%A1%9C">
            <img className="tomiyasu" src={tomiyasuImg} alt="Takehiro Tomiyasu" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://namu.wiki/w/%EC%98%AC%EB%A0%89%EC%82%B0%EB%93%9C%EB%A5%B4%20%EC%A7%84%EC%B2%B8%EC%BD%94">
            <img className="zinchenko" src={zinchenkoImg} alt="Oleksandr Zinchenko" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://namu.wiki/w/%EB%A1%AD%20%ED%99%80%EB%94%A9">
            <img className="holding" src={holdingImg} alt="Rob Holding" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://namu.wiki/w/%EA%B0%80%EB%B8%8C%EB%A6%AC%EC%97%90%EC%9A%B0%20%EC%A0%9C%EC%A3%BC%EC%8A%A4">
            <img className="jesus" src={jesusImg} alt="Gabriel Jesus" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://namu.wiki/w/%EC%A1%B0%EB%A5%B4%EC%A7%80%EB%89%B4">
            <img className="jorjinho" src={jorjinhoImg} alt="Jorginho" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://namu.wiki/w/%ED%86%A0%EB%A7%88%EC%8A%A4%20%ED%8C%8C%ED%8B%B0">
            <img className="party" src={partyImg} alt="Thomas Partey" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://namu.wiki/w/%EB%B6%80%EC%B9%B4%EC%9A%94%20%EC%82%AC%EC%B9%B4">
            <img className="saka" src={sakaImg} alt="Bukayo Saka" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://namu.wiki/w/%EB%A0%88%EC%95%88%EB%93%9C%EB%A1%9C%20%ED%8A%B8%EB%A1%9C%EC%82%AC%EB%A5%B4">
            <img className="trossard" src={trossardImg} alt="Leandro Trossard" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://namu.wiki/w/%EB%A7%88%EB%A5%B4%ED%8B%B4%20%EC%99%B8%EB%8D%B0%EA%B3%A0%EB%A5%B4">
            <img className="Odegaard" src={odegaardImg} alt="Martin Ødegaard" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://namu.wiki/w/%EB%AF%B8%EC%BC%88%20%EC%95%84%EB%A5%B4%ED%85%8C%EB%83%90">
            <img className="arteda" src={artedaImg} alt="Mikel Arteta" />
          </a>
          <img className="mab" src={jusulpanImg} alt="Jusulpan" />
        </div>
      </div>
    </>
  );
}

export default Teams;
