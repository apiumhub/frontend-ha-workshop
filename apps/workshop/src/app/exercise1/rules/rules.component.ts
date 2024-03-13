import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
	standalone: true,
	imports: [],
	selector: "workshop-rules",
	templateUrl: "./rules1.component.html",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Rules1Component {}

@Component({
	standalone: true,
	imports: [],
	selector: "workshop-rules2",
	templateUrl: "./rules2.component.html",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Rules2Component {}
