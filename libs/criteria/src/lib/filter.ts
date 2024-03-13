import { InvalidArgumentError } from "./exceptions";
import { FilterOperator } from "./filterOperator";

export class Filter {
	readonly field: string;
	readonly operator: FilterOperator;
	readonly value: string;

	constructor(field: string, operator: FilterOperator, value: string) {
		this.field = field;
		this.operator = operator;
		this.value = value;
	}

	static fromValues(values: Map<string, string>): Filter {
		const field = values.get("field");
		const operator = values.get("operator");
		const value = values.get("value");

		if (!field || !operator || !value) {
			throw new InvalidArgumentError("The filter is invalid");
		}

		return new Filter(field, FilterOperator.fromValue(operator), value);
	}
}
