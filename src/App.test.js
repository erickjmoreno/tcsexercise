import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

test("App Renders", () => {
	render(
		<Router>
			<App />
		</Router>
	);
	const welcome = screen.getByText(/Welcome/i);
	expect(welcome).toBeInTheDocument();
});
