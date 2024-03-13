import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import {
	FormBuilder,
	type FormGroupDirective,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";

@Component({
	standalone: true,
	imports: [
		RouterModule,
		MatButtonToggleModule,
		ReactiveFormsModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatCheckboxModule,
		MatSelectModule,
		MatButtonModule,
		MatTableModule,
		MatDividerModule,
	],
	selector: "workshop-exercise2",
	templateUrl: "./exercise2.component.html",
	styleUrl: "./exercise2.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Exercise2Component {
	// Form --------------------------------------
	formBuilder = inject(FormBuilder);
	roles = ["admin", "user", "guest"];
	userForm = this.createForm();

	createForm() {
		return this.formBuilder.group({
			name: [""],
			surname: ["", [Validators.required]],
			age: [""],
			role: ["admin"],
			acceptedTerms: [false],
			confirmedEmail: [false],
		});
	}

	submit(form: FormGroupDirective) {
		if (this.userForm.valid) {
			this.dataSource = [...this.dataSource, this.userForm.value];
			this.userForm.reset(this.createForm().value);
			form.resetForm();
		}
	}

	// Table --------------------------------------
	columns: string[] = ["name", "surname", "age", "role"];
	dataSource: unknown[] = [
		{
			name: "Albert",
			surname: "Parron Herrera",
			age: 34,
			role: "admin",
			acceptedTerms: true,
			confirmedEmail: true,
		},
		{
			name: "Lionel Andrés",
			surname: "Messi Cuccittini",
			age: 36,
			role: "user",
			acceptedTerms: true,
			confirmedEmail: false,
		},
	];
}
