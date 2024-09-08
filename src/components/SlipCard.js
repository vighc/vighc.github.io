import React, { useState } from 'react';

const SlipCard = ({ logo, details }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="card-front">
        <div className="card-content">
          <img src={logo} alt="Company Logo" className="company-logo" />
        </div>
      </div>
      <div className="card-back">
        <ul>
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SlipCard;
