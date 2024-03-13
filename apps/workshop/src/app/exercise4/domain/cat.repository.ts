import type { Cat } from "./cat";

export abstract class CatRepository {
	abstract save(cat: Cat): Promise<void>;
	abstract update(cat: Cat): Promise<void>;
	abstract delete(cat: Cat): Promise<void>;
	abstract getAll(): Promise<Cat[]>;
	abstract getById(id: string): Promise<Cat>;
}
