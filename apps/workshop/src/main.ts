import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { appConfig } from "./app/app.config";
import { isDevMode } from "@angular/core";
import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

async function prepareApp() {
	if (isDevMode()) {
		const worker = setupWorker(...handlers);
		return worker.start();
	}

	return Promise.resolve();
}

prepareApp().then(() => {
	bootstrapApplication(AppComponent, appConfig).catch((err) =>
		console.error(err),
	);
});
