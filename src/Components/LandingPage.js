import RandyMac from "./img/Randy-Mac-Dev-logo.jpg";
import Landing1 from "./img/LandingPage1.jpg";
import Landing2 from "./img/LandingPage2.jpg";
import Github from "./img/GitHub-Mark.png";

export default function Landing() {
  return (
    <div className="details">
      <img classname="details" src={RandyMac} alt="RandyMacDevlogo" /> 
      <h1>Landing Page</h1>
      <div className="detailContainer">
          <p>
              The landing page was the first project in the Kingland University bootcamp.  I was provided the html and css for this project.  The purpose was to learn how to utilize JavaScript to dynamically display form data on the webpage in the correct area.  
          </p>
          <img src={Landing1} alt="LandingPage1"/>
          <p>
              Some validation was required.  I hard coded usernames that would be valid into the JavaScript for the username field and the instructor dropdown field on the form.  I used a flatpicker for the date/time picker area. Also learned how to make the links work for the navigation bar and the links in the footer area.
          </p>
          <img src={Landing2} alt="LandingPage2" />
      </div>
      <a href="https://github.com/RandyMac22/Kingsland-Module3-Project">
          <img className="github" src={Github} alt="tinyGithub"/>
      </a>
    </div>
  );
}
