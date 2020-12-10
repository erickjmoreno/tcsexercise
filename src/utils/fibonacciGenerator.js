const fibonacciGenerator = (amount) => {
	let i = 0;
	let list = [0, 1];

	while (i < amount - 2) {
		list = [...list, list[i] + list[i + 1]];
		i++;
	}
	return list;
};

export default fibonacciGenerator;
