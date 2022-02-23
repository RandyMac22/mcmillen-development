import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
import "../index.css";

export default function Contact(){
    const navigate = useNavigate();
	const [email, setEmail] = useState("");
    const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [information, setMessage] = useState("");
	const [error, setError] = useState("");
	//todo fetch the first 11 posts to get the links to the pages

	const url = "https://mcmillendevelopment-default-rtdb.firebaseio.com/messages.json";
	
	const info={
		email,
		name,
		phone,
		information
	};

	const infoJSON = JSON.stringify(info);

	let headers = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: infoJSON
	}

	const submitHandler = (event) => {
		event.preventDefault();
		
		fetch(url, headers)
			.then(res=>{res.json();
			if (res.status === 200){
				alert("Message sent!");
				window.location.href("/");
			} else {
				alert("Message not sent. Please try again!");
				window.location.href("/contact");
			}})

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
					<input
						className="createInput"
						placeholder="Phone Number"
						type="number"
						name="phone"
						value={phone}
						onChange={(e) => {
							setPhone(e.target.value);
						}}
					/>
				</div>
				
				<div className="createFormGroup">
					<textarea 
						className="createInput"
						placeholder="Enter your message"
						name="information"
						type="text"
						value={information}
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