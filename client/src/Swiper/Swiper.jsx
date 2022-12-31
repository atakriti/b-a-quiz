import React, { useState } from 'react';
import './Swiper.scss';

function Swiper() {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log("🚀 ~ file: Swiper.jsx:6 ~ Swiper ~ currentIndex", currentIndex)
  const items = [
    'https://via.placeholder.com/500x300/000000',
    'https://via.placeholder.com/500x300/333333',
    'https://via.placeholder.com/500x300/666666',
    'https://via.placeholder.com/500x300/999999',
    'https://via.placeholder.com/500x300/999999',
    'https://via.placeholder.com/500x300/999999',
  ];

  const handlePrevClick = () => {
    if(currentIndex === 0){
        console.log("now to 0");
        return;
    }else{
        console.log("now moving backword");

        setCurrentIndex(currentIndex - 3);
    }
  };

  const handleNextClick = () => {
    if(currentIndex === 3){
        console.log("now to 3");

        return;
    }else{
        console.log("now moving forword");

        setCurrentIndex(currentIndex + 3);
    }
  };

  return (
    <div className="swiper-container">
      <button className="prev-button" onClick={handlePrevClick}>
        Prev
      </button>
      <div className="images-container">
      <img className="swiper-image" src={items[currentIndex]} alt="Item" />
      <img className="swiper-image" src={items[currentIndex + 1]} alt="Item" />
      <img className="swiper-image" src={items[currentIndex + 2]} alt="Item" />
      </div>
      <button className="next-button" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
}
 
export default Swiper