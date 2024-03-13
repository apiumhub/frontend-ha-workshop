import {
	ChangeDetectionStrategy,
	Component,
	inject,
	signal,
	type OnInit,
	type WritableSignal,
} from "@angular/core";
import type { Cat } from "../domain/cat";
import { MatTableModule } from "@angular/material/table";
import { CatReadService } from "../application/readService";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
	standalone: true,
	imports: [MatTableModule, MatProgressSpinnerModule],
	selector: "workshop-cat-list",
	templateUrl: "./catList.component.html",
	styleUrl: "./catList.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatListComponent implements OnInit {
	displayedColumns: string[] = ["name", "age", "color"];
	catReadService = inject(CatReadService);
	loading = signal(false);
	error = signal(false);
	cats: WritableSignal<Cat[]> = signal([]);

	ngOnInit(): void {
		this.loadCats();
	}

	async loadCats() {
		this.loading.set(true);
		this.error.set(false);
		try {
			const cats = await this.catReadService.getAll();
			this.cats.set(cats);
		} catch (e) {
			this.error.set(true);
		} finally {
			this.loading.set(false);
		}
	}
}
