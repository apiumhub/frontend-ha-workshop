import { Injectable, inject } from "@angular/core";
import type { Cat } from "../domain/cat";
import { CatRepository } from "../domain/cat.repository";

@Injectable({
	providedIn: "root",
})
export class CatWriteService {
	private catRepository = inject(CatRepository);

	async createCat(cat: Cat): Promise<void> {
		await this.catRepository.save(cat);
	}

	async updateCat(cat: Cat): Promise<void> {
		await this.catRepository.update(cat);
	}

	async deleteCat(cat: Cat): Promise<void> {
		await this.catRepository.delete(cat);
	}
}
