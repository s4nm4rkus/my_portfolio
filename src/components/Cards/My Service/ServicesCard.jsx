import React from "react";
import "./services.card.css";
import webDevIcon from "../../../assets/icons/web-dev-icon.svg";
import mobileAppDevIcon from "../../../assets/icons/mobile-app-dev-icon.svg";
import cmsIcon from "../../../assets/icons/cms-icon.svg";
import frontEndIcon from "../../../assets/icons/front-end-icon.svg";
import UiUxIcon from "../../../assets/icons/ui-ux-icon.svg";
import graphicDesignIcon from "../../../assets/icons/graphic-design-icon.svg";

function ServicesCard() {
  // const [isOpen, setIsOpen] = useState(false);
  // const [hovered, setHovered] = useState(false);

  return (
    <div className="cards">
      <div className="card-container">
        <img src={webDevIcon} alt="Web Dev Icon" className="services-icon" />
        <p className="service-title">Web Development</p>
        <p className="service-content">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>
      </div>

      <div className="card-container">
        <img
          src={mobileAppDevIcon}
          alt="Mobile App Dev Icon"
          className="services-icon"
        />
        <p className="service-title">Mobile App Development</p>
        <p className="service-content">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>
      </div>

      <div className="card-container">
        <img src={cmsIcon} alt="CMS Icon" className="services-icon" />
        <p className="service-title">Content Management System (CMS)</p>
        <p className="service-content">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>
      </div>

      <div className="card-container">
        <img
          src={frontEndIcon}
          alt="Front-end Icon"
          className="services-icon-frontend"
        />
        <p className="service-title">Front-end Development</p>
        <p className="service-content">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>
      </div>

      <div className="card-container">
        <img src={UiUxIcon} alt="Ui/Ux Icon" className="services-icon" />
        <p className="service-title">UI / UX Design </p>
        <p className="service-content">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>
      </div>

      <div className="card-container">
        <img
          src={graphicDesignIcon}
          alt="Graphic Design Icon"
          className="services-icon"
        />
        <p className="service-title">Graphic Design</p>
        <p className="service-content">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>
      </div>
    </div>
  );
}

export default ServicesCard;
