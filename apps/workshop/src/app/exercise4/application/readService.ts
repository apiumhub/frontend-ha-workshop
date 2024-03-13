import { Injectable, inject } from "@angular/core";
import { CatRepository } from "../domain/cat.repository";

@Injectable({
	providedIn: "root",
})
export class CatReadService {
	private catRepository = inject(CatRepository);

	async getAll() {
		return this.catRepository.getAll();
	}
	async getById(id: string) {
		return this.catRepository.getById(id);
	}
}
