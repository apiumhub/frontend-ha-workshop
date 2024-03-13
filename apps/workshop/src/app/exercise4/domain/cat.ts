export interface CatPrimitives {
	id: string;
	name: string;
	age: number;
	color: string;
}

export class Cat {
	private constructor(
		public readonly id: string,
		public readonly name: string,
		public readonly age: number,
		public readonly color: string,
	) {}

	static create(id: string, name: string, age: number, color: string): Cat {
		return new Cat(id, name, age, color);
	}

	static fromPrimitives(json: CatPrimitives): Cat {
		return new Cat(json.id, json.name, json.age, json.color);
	}

	toPrimitives(): CatPrimitives {
		return {
			id: this.id,
			name: this.name,
			age: this.age,
			color: this.color,
		};
	}

	getHumanAge(): number {
		return this.age * 7;
	}
}
