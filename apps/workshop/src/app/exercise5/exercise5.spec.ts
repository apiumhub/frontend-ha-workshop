import { Exercise5 } from "./exercise5";

xdescribe("Exercise 5", () => {
	it("Test Case 1", () => {
		runTest([3, 5, -4, 8, 11, 1, -1, 6], 10, [-1, 11]);
	});

	it("Test Case 2", () => {
		runTest([4, 6], 10, [4, 6]);
	});

	it("Test Case 3", () => {
		runTest([4, 6, 1], 5, [1, 4]);
	});

	it("Test Case 4", () => {
		runTest([4, 6, 1, -3], 4, []);
	});

	it("Test Case 5", () => {
		runTest([1, 2, 3, 4, 5, 6, 7, 8, 9], 17, [8, 9]);
	});

	it("Test Case 6", () => {
		runTest([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18, [3, 15]);
	});

	it("Test Case 7", () => {
		runTest([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5, [-5, 0]);
	});

	it("Test Case 8", () => {
		runTest([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163, [-47, 210]);
	});

	it("Test Case 9", () => {
		runTest([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 164, []);
	});

	it("Test Case 10", () => {
		runTest([3, 5, -4, 8, 11, 1, -1, 6], 15, []);
	});
});

const runTest = (array: number[], targetSum: number, expected: number[]) => {
	const result = Exercise5(array, targetSum);
	result.sort((a: number, b: number) => a - b);
	expect(result).toEqual(expected);
};
