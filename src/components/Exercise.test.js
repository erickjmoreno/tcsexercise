import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Exercise from "./Exercise";

test("Exercise works as intended", () => {
	render(<Exercise />);
	const title = screen.getByText(/Fibonacci List/i);
	expect(title).toBeInTheDocument();
	const checkInput = screen.getByText(/Verify number belongs to the series/);
	expect(checkInput).toBeInTheDocument();

	const inputField = screen.getByTestId("input");
	expect(inputField).toBeInTheDocument();

	userEvent.type(inputField, "2584");
	expect(inputField).toHaveValue("2584");

	const submitButton = screen.getByTestId("submitButton");
	userEvent.click(submitButton);
	const seriesCheck = screen.getByText(/Belongs to series/);
	expect(seriesCheck).toBeInTheDocument();

	userEvent.type(inputField, "22");
	expect(inputField).toHaveValue("22");

	userEvent.click(submitButton);

	const notInSeries = screen.getByText(/Number not in series/gi);
	expect(notInSeries).toBeInTheDocument();
});
