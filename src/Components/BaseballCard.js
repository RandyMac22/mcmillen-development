import RandyMac from "./img/Randy-Mac-Dev-logo.jpg";
import AddCard from './img/addCard.png';
import Landing from './img/Baseball-card-collection1.png';
import LoggedIn from './img/Baseball-card-collection2.png';

function BaseballCardCollection () {
    return (
        <div className='details'>
            <img className="details" src={RandyMac} alt="RandyMacDev logo" />
            <h1>Baseball Card Collection</h1>
            <div className="detailContainer">
                <p>The Baseball Card Collection project was a personal project.  I was a collector when I was younger and I wanted a way to track my collection's value.</p>
                <p>I used React and the database is a Firebase Realtime Database.</p>
                <img src={Landing} alt="Landing Page" />
            </div>
        </div>
    )
}

export default BaseballCardCollection