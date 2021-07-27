import React from "react";
import { Image } from "react-bootstrap";
import cvPhoto1 from "../../static/cvPhoto1.png";
import cvPhoto2 from "../../static/cvPhoto2.jpg";
import cvPhoto3 from "../../static/cvPhoto3.jpg";
import "./InfoHeader.css";
import ruLogo from "../../static/ruLogoNoBackground.png";

const InfoHeader = () => {
  return (
    <div className="box-container">
      <div className="xp-container">
      <div>
        <Image className="ru-logo-small" src={ruLogo} alt="RU"/>
        Computer Science
      </div>
      <div>
        <Image className="ru-logo-small" src={ruLogo} alt="RU"/>
        Business Administration
      </div>
      </div>
    <div className="cv-photo-container">
      <Image className="cv-photo cv-photo-1" src={cvPhoto1} alt="FÞ"/>
      {/* Fjölnir Þrastarson. Hello sir */}
      <Image className="cv-photo cv-photo-2" src={cvPhoto2} alt="FÞ"/>
      {/* Fjölnir Þrastarson. Hello sir */}

      <Image className="cv-photo cv-photo-3" src={cvPhoto3} alt="FÞ"/>
      {/* Fjölnir Þrastarson. Hello sir */}
   </div>
   </div>
  )
}

export default InfoHeader;