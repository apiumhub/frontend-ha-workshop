import { ChangeDetectionStrategy, Component } from "@angular/core";
import type { Cat } from "../domain/cat";
import { MatTableModule } from "@angular/material/table";
import { CatMother } from "../test/catMother";

@Component({
	standalone: true,
	imports: [MatTableModule],
	selector: "workshop-cat-list",
	templateUrl: "./catList.component.html",
	styleUrl: "./catList.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatListComponent {
	displayedColumns: string[] = ["name", "age", "color"];

	cats: Cat[] = [CatMother.random(), CatMother.random(), CatMother.random()];
}
