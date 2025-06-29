import "./home.css";
import HomeNav from "../../components/Navs/homenav";
import myImage from "../../assets/images/my-image.svg";
import myImageOverlay from "../../assets/images/my-image-overlay.svg";

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
          </div>
          <div className="hero-images-container">
            <img src="#" alt="My Image" className="myimage" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
