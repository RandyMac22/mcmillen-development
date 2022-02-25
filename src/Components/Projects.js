import Landing1 from "./img/LandingPage1.jpg";
import UniEvent from "./img/UniEvent.jpg";
import KingWiki from "./img/KingWiki.jpg";
import Atlas from "./img/Atlas.jpg";

export default function Projects() {
  return (
    <div className="projects">
      <h1>School Projects</h1>
      <div className="posts">
        <a href="/projects/landing-page">
          <div className="card">
            <img className="postImg" src={Landing1} alt="schedulingApp" />
            <div className="card-body">
              <p>
                <strong>Name: </strong>
                Landing Page
              </p>
              <p>
                <strong>Type: </strong>
                JavaScript
              </p>
              <p>
                <strong>Details: </strong>
                Module 3 Project
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
              <p>
                <strong>Type: </strong>
                Node.js and Handlebars
              </p>
              <p>
                <strong>Database: Firebase</strong>
              </p>
              <p>
                <strong>Details: </strong>
                Module 4 Project
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
              <p>
                <strong>Type: </strong>
                Node.js and Handlebars
              </p>
              <p>
                <strong>Database: Firebase</strong>
              </p>
              <p>
                <strong>Details: </strong>
                Module 5 Project
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
                Atlas Health and Wellness Blog
                </p>
                <p>
                <strong>Type: </strong>
                React
                </p>
                <p>
                <strong>Database: MongoDB</strong>
                </p>
                <p>
                <strong>Details: </strong>
                Module 6 Project
                </p>
            </div>
            </div>
        </a>
      </div>
    </div>
  );
}
