import { Cat, type CatPrimitives } from "../domain/cat";
import { faker } from "@faker-js/faker";

export class CatMother {
	static random(data?: Partial<CatPrimitives>): Cat {
		return Cat.create(
			data?.id ?? faker.string.uuid(),
			data?.name ?? faker.person.firstName(),
			data?.age ?? faker.number.int({ min: 0, max: 23 }),
			data?.color ?? faker.color.human(),
		);
	}

	static withAge(age: number) {
		return CatMother.random({ age });
	}
}
