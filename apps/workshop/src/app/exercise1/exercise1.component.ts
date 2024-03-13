import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { RouterModule } from "@angular/router";
import { Rules1Component, Rules2Component } from "./rules/rules.component";

@Component({
	standalone: true,
	imports: [
		RouterModule,
		MatButtonToggleModule,
		ReactiveFormsModule,
		Rules1Component,
		Rules2Component,
	],
	selector: "workshop-exercise1",
	templateUrl: "./exercise1.component.html",
	styleUrl: "./exercise1.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Exercise1Component {
	option1 = new FormControl("");
	option2 = new FormControl("");

	getResult(): string {
		return "result here!";
	}
}
