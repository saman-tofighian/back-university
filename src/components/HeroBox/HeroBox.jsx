import "./HeroBox.css";
import CountUp from "react-countup";

function HeroBox({ countTitle, countDesc, countIcon }) {
  return (
    <div className="heroBox-container">
      <div className="heroBox-header p-3">
        {countIcon}
        <strong className="heroBox-title">{countTitle}</strong>
      </div>
      <p className="heroBox-count">
        <CountUp
          start={0}
          end={countDesc}
          duration={5}
          separator=""
          delay={0.5}
        />
      </p>
    </div>
  );
}

export default HeroBox;
