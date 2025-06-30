import "./home.css";
import HomeNav from "../../components/Navs/HomeNav";
import ServicesCard from "../../components/Cards/My Service/ServicesCard";

import myImage from "../../assets/images/my-image.svg";
import fbIcon from "../../assets/icons/fb-icon.svg";
import linkedInIcon from "../../assets/icons/linkedin-icon.svg";
import githubIcon from "../../assets/icons/github-icon.svg";
import myImageOverlay from "../../assets/images/my-image-overlay.svg";
import boxesLines from "../../assets/images/boxes-lines-bg.svg";

function Home() {
  return (
    <>
      <HomeNav />
      <div className="home-wrapper">
        <div className="hero-container">
          <div className="hero-text-container">
            <p className="greet-text">Hello Im </p>
            <span className="fullname-text">San Mark A. Morcoso</span>
            <p className="name-text">Markus</p>
            <p className="my-skill-text">
              A Full-stack Developer and Front-end Designer
            </p>
            <p className="summary-description">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s
            </p>
            <p className="find-me">Find me on</p>
            <div className="find-me-icons">
              <button className="find-me-btns">
                <img
                  src={fbIcon}
                  alt="Facebook Icon"
                  className="find-me-icon"
                />
              </button>
              <button className="find-me-btns">
                <img
                  src={linkedInIcon}
                  alt="LinkedIn Icon"
                  className="find-me-icon"
                />
              </button>
              <button className="find-me-btns">
                <img
                  src={githubIcon}
                  alt="Github Icon"
                  className="find-me-icon"
                />
              </button>
            </div>
          </div>
          <div className="hero-images-container">
            <img src={myImage} alt="My Image" className="myimage" />
            <img
              src={myImageOverlay}
              alt="My Image"
              className="myimageoverlay"
            />
            <img src={boxesLines} alt="My Image" className="boxesLines-bg" />
          </div>
        </div>
        <hr
          style={{
            marginTop: "3rem",
            marginBottom: "3rem",
            border: "solid 1.5px #1A1B1C",
          }}
        />
        <div className="services-container">
          <p className="section-title">My Services</p>
          <p className="section-subtitle">What I Do</p>
          <ServicesCard />
        </div>
      </div>
    </>
  );
}

export default Home;
