import React from "react";
import { Link } from "react-router-dom";

const linkStyle = { color: "white", textDecoration: "none", marginLeft: "2em", fontSize: "1.5em", fontWeight: "bold" };

const Header = () => {
	return (
		<div style={{ backgroundColor: "#005ea6" }}>
			<nav style={{ height: "2em", lineHeight: "2em" }}>
				<Link style={{ ...linkStyle, marginLeft: "0.2em" }} to="/">
					Home
				</Link>
				<Link style={linkStyle} to="/exercise">
					Exercise
				</Link>
			</nav>
		</div>
	);
};

export default Header;
