import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import "../index.css";

export default function Contact(){
    const navigate = useNavigate();
	const [email, setEmail] = useState("");
    const [userName, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [repass, setRePass] = useState("");
	const [error, setError] = useState("");
	//todo fetch the first 11 posts to get the links to the pages

	const submitHandler = (event) => {
		event.preventDefault();
		if (password !== repass) {
			setError("Both Passwords must be the same!");
			return;
		}
		isNewUser(userName).then((bool) => {
			if (!bool) {
				setError("Username is already in use!");
				return;
			}
			registerUser(userName, password).then((res) => {
				console.log(res);
				navigate("/login");
			});

    return (
        <div className="register">

			<h1 className="register">Register</h1>
			<form className="createForm" onSubmit={submitHandler}>
				<div className="createFormGroup">
					<input
						className="createInput"
						placeholder="Name"
						type="text"
						autoFocus={true}
						name="name"
						value={name}
						onChange={(e) => {
							setUsername(e.target.value);
						}}
					/>
				</div>
                <div className="createFormGroup">
					<input
						className="createInput"
						placeholder="Email"
						type="text"
						name="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</div>
				<div className="createFormGroup">
					<input
						className="createInput"
						placeholder="Password"
						name="imageURL"
						type="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
				</div>
				<div className="createFormGroup">
					<input
						className="createInput"
						placeholder="Repeat Password"
						name="imageURL"
						type="password"
						value={repass}
						onChange={(e) => {
							setRePass(e.target.value);
						}}
					/>
				</div>

				<div className="createFormGroup">
					<button className="registerSubmit" type="submit">
						Register
					</button>
				</div>
				<p>Already registered? <Link to="/login">Login</Link></p>
					<br />
			</form>
		</div>
	);
    )
}