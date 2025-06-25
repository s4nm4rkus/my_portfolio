import "./home.css";
import HomeNav from "../../components/Navs/homenav";

function Home() {
  return (
    <>
      <HomeNav />
      <div className="home-wrapper">
        <h1>Welcome to My Portfolio</h1>
        <p>This is the homepage content.</p>
      </div>
    </>
  );
}

export default Home;
