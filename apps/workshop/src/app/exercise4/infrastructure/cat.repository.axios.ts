import { Cat } from "../domain/cat";
import type { CatRepository } from "../domain/cat.repository";
import { CatMother } from "../test/catMother";
import axios from "axios";

export class CatRepositoryAxios implements CatRepository {
	async getAll(): Promise<Cat[]> {
		return new Promise((res, rej) => {
			setTimeout(async () => {
				try {
					const result = await axios.get("/cats");
					const response = result.data.map(Cat.fromPrimitives);
					res(response);
				} catch (err) {
					rej(err);
				}
			}, 2000);
		});
	}
	async getById(id: string) {
		return CatMother.random();
	}
	async save(cat: Cat) {
		return;
	}
	async update(cat: Cat) {
		return;
	}
	async delete(cat: Cat) {
		return;
	}
}
