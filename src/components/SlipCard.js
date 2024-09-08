// components/SlipCard.js
const SlipCard = ({ logo, title, period, details }) => (
  <div className="card">
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

export default SlipCard;
