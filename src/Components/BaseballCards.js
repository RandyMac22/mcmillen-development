import RandyMac from "./img/Randy-Mac-Dev-logo.jpg";
import Github from "./img/GitHub-Mark.png";
import LandingPage from './img/Baseball-card-collection1.png';
import Home from './img/Baseball-card-collection2.png';
import Login from './img/baseball-card-collection-login.png';
import Register from './img/baseball-card-collection-register.png';
import AddCard from './img/addCard.png';

export default function BaseballCardCollection() {
    return(
        <>
            <div className='details'>
                <img className="details" src={RandyMac} alt="" />
                <h1>Baseball Card Collection</h1>
                <div className="detailContainer">
                    <p>
                        The Baseball Card Collection project was a personal project.  I collected baseball cards growing up and wanted a way to track my collection and it's value.  I used React and Firebase's realtime database.
                    </p>
                    <img src={LandingPage} alt="Baseball Card landing page" />
                    <p>
                        The login page uses authorization from Firebase.
                    </p>
                    <img src={Login} alt="" />
                    <p>
                        The registration page is set up to use auth from Firebase
                    </p>
                    <img src={Register} alt="" />
                    <p>
                        Once logged in the homepage is shown, listing all current cards in your database.
                    </p>
                    <img src={Home} alt="" />
                    <p>
                        The add card page requires input from you and a link to a picture of the card from the internet.
                    </p>
                    <img src={AddCard} alt="" />
                </div>
                <a href="https://github.com/RandyMac22/baseball-card-collection">
                    <img className="github" src={Github} alt="tinyGithub"/>
                </a>
            </div>
        </>
    )
}