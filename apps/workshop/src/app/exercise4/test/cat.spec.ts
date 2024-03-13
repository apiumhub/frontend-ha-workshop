import { CatMother } from "./catMother";

describe("Cat", () => {
	it("should get human age", () => {
		expect(CatMother.withAge(1).getHumanAge()).toEqual(7);
		expect(CatMother.withAge(5).getHumanAge()).toEqual(35);
		expect(CatMother.withAge(9).getHumanAge()).toEqual(63);
	});
});
