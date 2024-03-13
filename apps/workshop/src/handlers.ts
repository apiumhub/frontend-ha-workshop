import { http, HttpResponse } from "msw";
import { CatMother } from "./app/exercise3/test/catMother";

export const handlers = [
	http.get("/cats", () => {
		return HttpResponse.json([
			CatMother.random(),
			CatMother.random(),
			CatMother.random(),
		]);
	}),
];
