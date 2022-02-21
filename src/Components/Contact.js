import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import "../index.css";

export default function Contact(){
    const navigate = useNavigate();
	const [email, setEmail] = useState("");
    const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");
	//todo fetch the first 11 posts to get the links to the pages

	const submitHandler = (event) => {
		event.preventDefault();
	}

    return (
        <div className="register">

			<h1 className="register">Contact Us</h1>
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
							setName(e.target.value);
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
					<textarea
						className="createInput"
						placeholder="Enter your message"
						name="message"
						type="text"
						value={message}
						onChange={(e) => {
							setMessage(e.target.value);
						}}
					/>
				</div>

				<div className="createFormGroup">
					<button className="registerSubmit" type="submit">
						Submit
					</button>
				</div>
				
			</form>
		</div>
	);
    
}