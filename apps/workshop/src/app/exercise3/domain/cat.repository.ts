import type { Cat } from "./cat";

export abstract class CatRepository {
	abstract getAll(): Promise<Cat[]>;
}
