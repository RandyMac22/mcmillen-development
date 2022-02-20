import linkedIn from "../Components/img/linkedInlogo.jpg";
import gitHub from "../Components/img/GitHub-Mark.png";

export default function Footer() {
    return(
        <footer className="footer">
				{/* <footer> */}
				<div>
					<a href="https://www.linkedin.com/in/randy-mcmillen-jr-416878212/">
                        <img src={linkedIn} />
                    </a>
                    <a href="https://github.com/RandyMac22">
                        <img src={gitHub} />
                    </a>
					<p>Created using React.js and deployed with AWS Amplify</p>
                    <p>Copyright © 2022 Randy McMillen Jr.  All rights reserved.</p>
				</div>
			</footer>
    )
}