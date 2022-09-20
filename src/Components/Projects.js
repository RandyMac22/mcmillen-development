import Landing1 from "./img/LandingPage1.jpg";
import UniEvent from "./img/UniEvent.jpg";
import KingWiki from "./img/KingWiki.jpg";
import Atlas from "./img/Atlas.jpg";
import AmazonClone from './img/amazonclone.png';

export default function Projects() {
  return (
    <div className="projects">
      <h1>School Projects</h1>
      <p style={{textAlign: "center"}}>Click on the projects below to see more</p>
      <div className="posts">
        <a href="/projects/landing-page">
          <div className="card">
            <img className="postImg" src={Landing1} alt="schedulingApp" />
            <div className="card-body">
              <p>
                <strong>Name: </strong>
                Landing Page
              </p>
            </div>
          </div>
        </a>

        <a href="/projects/unievent">
          <div className="card">
            <img className="postImg" src={UniEvent} alt="uniEvent" />
            <div className="card-body">
              <p>
                <strong>Name: </strong>
                UniEvent
              </p>
            </div>
          </div>
        </a>

        <a href="/projects/kingWiki">
          <div className="card">
            <img className="postImg" src={KingWiki} alt="uniEvent" />
            <div className="card-body">
              <p>
                <strong>Name: </strong>
                KingWiki
              </p>
            </div>
          </div>
        </a>
        <a href="/projects/atlas">
            <div className="card">
            <img className="postImg" src={Atlas} alt="uniEvent" />
            <div className="card-body">
                <p>
                <strong>Name: </strong>
                Atlas Blog
                </p>
            </div>
            </div>
        </a>
        <br />
        <br />
      </div>
      <div className="projects">
        <h1>Personal Projects</h1>
          <a href='/projects/amazonClone'>
            <div className="card">
              <img className="postImg" src={AmazonClone} alt='Amazon Clone'></img>
              <div className="card-body">
                <p>
                  <strong> Name: </strong>
                  Amazon Clone
                </p>
              </div>
            </div>
          </a>
      </div>
    </div>
  );
}
