import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonToggleModule } from "@angular/material/button-toggle";

@Component({
	standalone: true,
	imports: [RouterModule, MatToolbarModule, MatButtonToggleModule],
	selector: "workshop-root",
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "workshop";
}
