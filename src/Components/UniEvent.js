import RandyMac from "./img/Randy-Mac-Dev-logo.jpg";
import UniEvent from "./img/UniEvent.jpg";
import UniEventRegister from "./img/UniEventRegister.jpg";
import UniEventLogin from "./img/UniEventLogin.jpg";
import UniEventHome from "./img/UniEventHome.jpg";
import UniEventOrganize from "./img/UniEventOrganize.jpg";
import UniEventProfile from "./img/UniEventProfile.jpg";
import UniEventDetailsCreator from "./img/UniEventDetailsCreator.jpg";
import UniEventDetails from "./img/UniEventDetails.jpg";
import Github from "./img/GitHub-Mark.png";

export default function Landing() {
    return (
      <div className="details">
        <img classname="details" src={RandyMac} alt="RandyMacDevlogo" /> 
        <h1>UniEvent</h1>
        <div className="detailContainer">
            <p>
                The UniEvent project was the second project in my bootcamp with Kingsland University.  It is a place for people to share events that they are interested in and invite other users of the site to follow or attend.  The css and html were provided.  Notifications were a new element that were displayed and hidden using JavaScript.  We introduced databases in this project and utilized Firebase for this task.  Routing was done with Sammy and utilized hash routing.
            </p>
            <img src={UniEvent} alt="UniEventHomepage"/>
            <p>
                The guest homepage was provided and I adjusted some css for better visual feel. Visitors can navigate to the login page only from this page.
            </p>
            <img src={UniEventLogin} alt="UniEventLogin" />
            <p>
                The login page is rather simple.  Regular expressions were used for verification of username and password lengths and rules. A link is provided to register if the visitor is not registered yet.
            </p>
            <img src={UniEventRegister} alt="UniEventRegister" />
            <p> 
                The registration page is also rather simple.  Regular expressions were used for verification of username and password lengths and rules.  It also provides a link to the login page if already registered.
            </p>
            <img src={UniEventHome} alt="UniEventHome" />
            <p>
                The homepage is reached once logged in.  All currently listed events for all users are displayed.  clicking on the "More" button takes you to a more detailed view of events.
            </p>
            <img src={UniEventDetails} alt="UniEventDetails" />
            <p>
                This is the details page the user sees on events they did not create.  They are able to follow the event by clicking on the button.
            </p>
            <img src={UniEventDetailsCreator} alt="UniEventDetailsCreator" />
            <p>
                This is the details page the user sees on events they created.  They can then edit or delete the event.
            </p>
            <img src={UniEventOrganize} alt="UniEventOrganize" />
            <p>
                This is the organize event page.  Users can create events to share to the site's users.
            </p>
            <img src={UniEventProfile} alt="UniEventProfile" />
            <p>
                The profile page displays the currently logged in user's information as well as events that have been created by the user.
            </p>
        </div>
        <a href="https://github.com/RandyMac22/Kingsland-Module4-Project">
            <img className="github" src={Github} alt="tinyGithub"/>
        </a>
      </div>
    );
  }