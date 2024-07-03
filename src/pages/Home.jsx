import React, { useState } from 'react';
import '../index.css';
import Arsenal_img from '../photo_shirt/2f71b55ee938c8d1aa6233376f7aa480.jpg';
import ArsenalShirtFront from '../photo_shirt/mhr6929_f.jpg';
import ArsenalShirtSide from '../photo_shirt/mhr6929_s.jpg';
import ArsenalShirtSide2 from '../photo_shirt/mhr6929_s2.jpg';
import ArsenalShirtBack from '../photo_shirt/mhr6929_b.jpg';
import ArsenalShirtLogo from '../photo_shirt/mhr6929_d.jpg';
import ArsenalShirtNeck from '../photo_shirt/mhr6929_d2.jpg';
import TrainingShirtFront from '../photo_shirt/mhz2174_f.jpg';
import TrainingShirtSide from '../photo_shirt/mhz2174_s.jpg';
import TrainingShirtSide2 from '../photo_shirt/mhz2174_s2.jpg';
import TrainingShirtBack from '../photo_shirt/mhz2174_b.jpg';
import TrainingShirtLogo from '../photo_shirt/mhz2174_d1.jpg';
import TrainingShirtAdidas from '../photo_shirt/mhz2174_d2.jpg';

function Home() {
  const [shirtPhoto, setShirtPhoto] = useState(ArsenalShirtFront);
  const [trainingShirtPhoto, setTrainingShirtPhoto] = useState(TrainingShirtFront);

  const handleShirtChange = (photo) => {
    setShirtPhoto(photo);
  };

  const handleTrainingShirtChange = (photo) => {
    setTrainingShirtPhoto(photo);
  };

  return (
    <>
      <div className="content">
        <div className="red"></div>
        
        <img className="imgs" src={Arsenal_img} alt="arsenal_img" />
        <div className="shirt">
          <h3>ARSENAL 23/24 HOME SHIRT</h3>
          <img id="photo" src={shirtPhoto} alt="Arsenal Shirt" />
          <div className="but">
            <button onClick={() => handleShirtChange(ArsenalShirtFront)} className="butt">FRoNT</button>
            <button onClick={() => handleShirtChange(ArsenalShirtSide)} className="butt">oBLiQue</button>
            <button onClick={() => handleShirtChange(ArsenalShirtSide2)} className="butt">SiDe</button>
            <button onClick={() => handleShirtChange(ArsenalShirtBack)} className="butt">BaCK</button>
            <button onClick={() => handleShirtChange(ArsenalShirtLogo)} className="butt">LoGo</button>
            <button onClick={() => handleShirtChange(ArsenalShirtNeck)} className="butt">NeCK</button>
          </div>
        </div>

        <div className="content_t">
          <h2 className="text">WELCOME to Arsenal in Korea</h2>
        </div>

        <div className="content_v">
          <div className="red"></div>
          <iframe className="video_2" src="https://www.youtube.com/embed/-fIXp5EpG8Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <div className="shirt2">
            <h3 className="h3_1">ARSENAL 23/24 SLEEVELESS TRAINING SHIRT</h3>
            <img id="photo1" src={trainingShirtPhoto} alt="Training Shirt" />
            <div className="but">
              <button onClick={() => handleTrainingShirtChange(TrainingShirtFront)} className="butt1">FRoNT</button>
              <button onClick={() => handleTrainingShirtChange(TrainingShirtSide2)} className="butt1">oBLiQue</button>
              <button onClick={() => handleTrainingShirtChange(TrainingShirtSide)} className="butt1">SiDe</button>
              <button onClick={() => handleTrainingShirtChange(TrainingShirtBack)} className="butt1">BaCK</button>
              <button onClick={() => handleTrainingShirtChange(TrainingShirtLogo)} className="butt1">LoGo</button>
              <button onClick={() => handleTrainingShirtChange(TrainingShirtAdidas)} className="butt1">aDiDaS</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
