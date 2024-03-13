import type { ApplicationConfig } from "@angular/core";
import type { FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";
import { appRoutes } from "./app.routes";
import { provideHttpClient } from "@angular/common/http";

export class MyErrorStateMatcher implements ErrorStateMatcher {
	isErrorState(
		control: FormControl | null,
		form: FormGroupDirective | NgForm | null,
	): boolean {
		const isSubmitted = form?.submitted;
		return !!(control?.invalid && isSubmitted);
	}
}
export const appConfig: ApplicationConfig = {
	providers: [
		provideHttpClient(),
		provideAnimations(),
		provideRouter(appRoutes),
		{ provide: ErrorStateMatcher, useClass: MyErrorStateMatcher },
	],
};
