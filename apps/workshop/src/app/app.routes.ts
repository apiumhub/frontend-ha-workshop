import type { Route } from "@angular/router";
import { Exercise1Component } from "./exercise1/exercise1.component";
import { Exercise2Component } from "./exercise2/exercise2.component";
import { CatListComponent } from "./exercise3/presentation/catList.component";
import { CatListComponent as CatListComponent2 } from "./exercise4/presentation/catList.component";

export const appRoutes: Route[] = [
	{
		path: "exercise1",
		component: Exercise1Component,
	},
	{
		path: "exercise2",
		component: Exercise2Component,
	},
	{
		path: "exercise3",
		component: CatListComponent,
	},
	{
		path: "exercise4",
		component: CatListComponent2,
	},
	{
		path: "",
		redirectTo: "exercise1",
		pathMatch: "full",
	},
];
