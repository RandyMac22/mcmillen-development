import RandyMac from "./img/Randy-Mac-Dev-logo.jpg";
import Github from "./img/GitHub-Mark.png";
import Amazon from './img/amazonclone.png';
import checkoutScreen from './img/checkoutScreen.png';

export default function Amazonclone(){
    return (
        <div className="details">
            <img className="details" src={RandyMac} alt="RandyMacDevLogo" />
            <h1>Amazon Clone</h1>
            <div className="detailContainer">
               <p>
                    The Amazon Clone was a personal project.  I wanted to learn to make an ecommerce store using React.  The server was Express and utilized Firebase for database work. 
               </p>
               <p>
                    To create an account fill out the email and password portions of the form then click on the Create your Amazon Account button.
               </p>
               <p>
                    Then proceed to use the site like you would using the actual Amazon Account.  Right now the only functionality is to add the product to the basket, but I'm working on the individual product pages and will update as soon as they are ready.
               </p>
               
                     <img src={Amazon} alt="Amazon Clone" />
               
                   
               <p>
                    The order review screen resembles amazon's order summary page.
               </p>
               <img src={checkoutScreen} alt=""/>
               <p>
                    After checkout your order history page will come up.  You can also utilize the navbar at the top of the screen to navigate the app.
               </p>
              
            </div>
            <a href="https://github.com/RandyMac22/amazon-clone">
           <img className="github" src={Github} alt="tinyGithub"/>
       </a>
        </div>
    )
}