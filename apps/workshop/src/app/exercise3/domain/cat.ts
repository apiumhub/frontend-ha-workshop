export interface CatPrimitives {
	name: string;
	age: number;
	color: string;
}

export class Cat {
	private constructor(
		public readonly name: string,
		public readonly age: number,
		public readonly color: string,
	) {}

	static create(name: string, age: number, color: string): Cat {
		return new Cat(name, age, color);
	}

	static fromPrimitives(json: CatPrimitives): Cat {
		return new Cat(json.name, json.age, json.color);
	}

	toPrimitives(): CatPrimitives {
		return {
			name: this.name,
			age: this.age,
			color: this.color,
		};
	}

	getHumanAge(): number {
		return this.age * 7;
	}
}
