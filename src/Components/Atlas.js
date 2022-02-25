import RandyMac from "./img/Randy-Mac-Dev-logo.jpg";
import Github from "./img/GitHub-Mark.png";
import Atlas from "./img/Atlas.jpg";
import AtlasRegister from "./img/AtlasRegister.jpg";
import AtlasLogin from "./img/AtlasLogin.jpg";
import AtlasNormalUser from "./img/AtlasNormalLoggedIn.jpg";
import AtlasAdminLoggedIn from "./img/AtlasAdminLoggedIn.jpg";
import AtlasNormalArticle from "./img/AtlasNormalArticle.jpg";
import AtlasAdminArticle from "./img/AtlasAdminArticle.jpg";

export default function AtlasHealth(){
    return (
        <div className="details">
            <img src={RandyMac} alt="RandyMacDevLogo" />
            <h1>Atlas Health and Wellness</h1>
            <div className="detailContainer">
                <p>
                    My final project for the bootcamp was a blog my project partner and I made for her son's physical therapy business.  We used React, JavaScript and routing was handled with Express.  The database used was MongoDB.
                </p>
                <img src={Atlas} alt="Atlas" />
                <p>
                    The landing page shows current blog articles for the site.   It has an aside that features some profile information about the doctor as well as links to the current articles.
                </p>
                <img src={AtlasRegister} alt="AtlasRegister" />
                <p>
                    The register page is handled like the other projects.
                </p>
                <img src={AtlasLogin} alt="AtlasLogin" />
                <p>
                    The login page is handled like the other's projects.
                </p>
                <img src={AtlasNormalUser} alt="AtlasNormalLoggedIn" />
                <p>
                    This is what the basic user that signs in sees.  They don't have the ability to edit or delete, but are able to read the full articles after registering.
                </p>
                <img src={AtlasNormalArticle} alt="AtlasNormalArticle" />
                <p>
                    This is the article view for the basic site user. 
                </p>
                <img src={AtlasAdminLoggedIn} alt="AtlasAdminLoggedIn" />
                <p>
                    This is the admin access level.  We added the ability to create an article at this level for the users that are administrator level users.
                </p>
                <img src={AtlasAdminArticle} alt="AtlasAdminArticle" />
                <p>
                    This is the article view for admin level users.  The ability to edit and delete were added on this page.
                </p>
            </div>
            <a href="https://github.com/jeanmariemcc/KU-P6-Project">
                <img className="github" src={Github} alt="tinyGithub"/>
            </a>
        </div>
    )
}