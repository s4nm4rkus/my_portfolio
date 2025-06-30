import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./services.card.css";
import webDevIcon from "../../../assets/icons/web-dev-icon.svg";
import mobileAppDevIcon from "../../../assets/icons/mobile-app-dev-icon.svg";
import cmsIcon from "../../../assets/icons/cms-icon.svg";
import frontEndIcon from "../../../assets/icons/front-end-icon.svg";
import UiUxIcon from "../../../assets/icons/ui-ux-icon.svg";
import graphicDesignIcon from "../../../assets/icons/graphic-design-icon.svg";

function ServicesCard() {
  const services = [
    {
      icon: webDevIcon,
      title: "Web Development",
      serviceDescription: `is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s.`,
    },
    {
      icon: mobileAppDevIcon,
      title: "Mobile App Development",
      serviceDescription: `is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s.`,
    },
    {
      icon: cmsIcon,
      title: "Content Management System (CMS)",
      serviceDescription: `is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s.`,
    },
    {
      icon: frontEndIcon,
      title: "Front-end Development",
      className: "services-icon-frontend",
      serviceDescription: `is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s.`,
    },
    {
      icon: UiUxIcon,
      title: "UI / UX Design",
      serviceDescription: `is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s.`,
    },
    {
      icon: graphicDesignIcon,
      title: "Graphic Design",
      serviceDescription: `is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s.`,
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center g-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center"
          >
            <div className="card-container text-left">
              <img
                src={service.icon}
                alt={service.title}
                className={`services-icon ${service.className || ""}`}
              />
              <p className="service-title">{service.title}</p>
              <p className="service-content">{service.serviceDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesCard;
