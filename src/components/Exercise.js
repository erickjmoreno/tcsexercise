import React, { useState } from "react";

import fibonacciGenerator from "../utils/fibonacciGenerator";
import { spanStyle, divStyle, formStyle, listStyle } from "../styles/exercise";

const Excercise = () => {
	const fibonacciList = fibonacciGenerator(20);
	const [number, setNumber] = useState(0);
	const [isFibonacci, setIsFibonacci] = useState(false);

	const fibonacciCheck = (number) => {
		const isNumberInList = fibonacciList.includes(number);
		if (isNumberInList) {
			setIsFibonacci(true);
		} else {
			setIsFibonacci(false);
		}
	};

	const handleChange = (e) => {
		const newNumber = e.target.value;
		setNumber(Number(newNumber));
	};

	const onSubmit = (e, number) => {
		e.preventDefault();
		fibonacciCheck(number);
	};

	const fibonacciListing = fibonacciList.map((n, i) => {
		return (
			<span key={i} style={spanStyle}>
				{n}
			</span>
		);
	});

	return (
		<div style={{ width: "fit-content", margin: "auto" }}>
			<div style={{ textAlign: "center", maxWidth: "370px", marginTop: "3em", marginBottom: "1em" }}>
				<span style={listStyle}>Fibonacci List</span>
				<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start", gap: "0 1em" }}>
					{fibonacciListing}
				</div>
			</div>
			<form style={formStyle} onSubmit={(e) => onSubmit(e, number)}>
				Verify number belongs to the series
				<br />
				<input placeholder="#" onChange={handleChange} value={number} />
				<button>&rarr;</button>
			</form>
			<div style={divStyle}>{isFibonacci ? "Belongs to series" : "Number not in series"}</div>
		</div>
	);
};

export default Excercise;
