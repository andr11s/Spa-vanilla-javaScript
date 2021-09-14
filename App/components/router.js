import { Api } from "../helpers/api.js";
import ApiConfig from "../helpers/api-config.js";
import { MoviesCard } from "./movies.js";
import { People } from "./people.js";
import { Starships } from "./starships.js";

export async function Router() {
	const d = document,
		$MAIN = d.getElementById("main");

	const { hash } = location;
	$MAIN.innerHTML = null;
	if (!hash || hash === "#/") {
		await Api({
			url: ApiConfig.FILMS,
			cbSucess: (movies) => {
				let htmlMovie = "";
				movies.forEach((element) => (htmlMovie += MoviesCard(element)));
				$MAIN.innerHTML = htmlMovie;
			},
		});
	} else if (hash.includes("#/people")) {
		await Api({
			url: ApiConfig.PEOPLE,
			cbSucess: (movies) => {
				let htmlPeople = "";
				movies.forEach((element) => (htmlPeople += People(element)));
				$MAIN.innerHTML = htmlPeople;
			},
		});
	} else if (hash.includes("#/starships")) {
		await Api({
			url: ApiConfig.STARSCHIPS,
			cbSucess: (movies) => {
				let htmlstarships = "";
				movies.forEach((element) => (htmlstarships += Starships(element)));
				$MAIN.innerHTML = htmlstarships;
			},
		});
	}

	d.querySelector(".loader").style.display = "none";
}
