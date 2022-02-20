import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import SiteStateObj from './Components/SiteStateObj';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<SiteStateObj />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);