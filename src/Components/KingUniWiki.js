 import RandyMac from "./img/Randy-Mac-Dev-logo.jpg";
 import Github from "./img/GitHub-Mark.png";
 import KingWiki from "./img/KingWiki.jpg";
 import KingUniLoggedInHome from "./img/KingUniLoggedInHome.jpg";
 import KingWikiAllArticles from "./img/KingWikiAllArticles.jpg";
 import KingWikiCreate from "./img/KingWikiCreate.jpg";
 import KingWikiLogin from "./img/KingWikiLogin.jpg";
 import KingWikiNonUserArticle from "./img/KingWikiNonUserArticle.jpg";
 import KingWikiRegister from "./img/KingWikiRegister.jpg";
 import KingWikiUserArticle from "./img/KingWikiUserArticle.jpg";

 export default function KingUniWiki(){
     return (
         <div className="details">
             <img className="details" src={RandyMac} alt="RandyMacDevLogo" />
             <h1>KingUni Wiki</h1>
             <div className="detailContainer">
                <p>
                    The KingUni Wiki project was my third project in the Kingsland University bootcamp. It is made with Node.js, routing is done with Express.  Database used was MongoDB.   
                </p>
                <img src={KingWiki} alt="KingWiki" />
                <p>
                    The landing page shows all current articles posted.  Visitors can read all articles without being logged in.  To get access to edit or create articles, the visitor must register.
                </p>
                <img src={KingWikiNonUserArticle} alt="KingWikiNonUserArticle" />
                <p>
                    This is the article view for when a visitor wants to view an article.  There are no options to edit if there is not a logged in user.
                </p>
                <img src={KingWikiAllArticles} alt="KingWikiAllArticles" />
                <p>
                    The All Articles page shows all titles published to the Wiki.  It is viewable whether a visitor is logged in or not.  
                </p>
                <img src={KingWikiRegister} alt="KingWikiRegister" />
                <p>
                    The register page is a simple page.  There is RegEx validation before sending information to MongoDB.
                </p>
                <img src={KingWikiLogin} alt="KingWikiLogin" />
                <p>
                    The login page is another simple page.  Standard login process happens here.
                </p>
                <img src={KingUniLoggedInHome} alt="KingWikiLoggedInHome" />
                <p>
                    Once a user is logged in the nav bar at the top of the page welcomes the user, and adds a Logout button to the top navigation bar.  It also adds a Create New Article option on the aside menu on the left side of the screen.
                </p>
                <img src={KingWikiCreate} alt="KingWikiCreate" />
                <p>
                    The create page verifies the length of a title as well as minimum characters for the body of the Wiki post.  This page is only accessible to logged in users.
                </p>
                <img src={KingWikiUserArticle} alt="KingWikiUserArticle" />
                <p>
                    This is a user created article.  You can see that the edit function is available as well as the ability to delete articles.
                </p>
             </div>
             <a href="https://github.com/RandyMac22/Kingsland-Module5-Project">
            <img className="github" src={Github} alt="tinyGithub"/>
        </a>
         </div>
     )
 }