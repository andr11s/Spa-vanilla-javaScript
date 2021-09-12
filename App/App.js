import { Header } from "./components/header.js";
import { Main } from "./components/main.js";
import { MoviesCard } from "./components/movies.js";
import { Api } from "./helpers/api.js";
import ApiConfig from "./helpers/api-config.js";

export function App() {
	const d = document;
	let $root = d.getElementById("root");

	$root.appendChild(Header());
	$root.appendChild(Main());

	Api({
		url: ApiConfig.FILMS,
		cbSucess: (movies) => {
			let htmlMovie = "";
			movies.forEach((element) => (htmlMovie += MoviesCard(element)));
			d.getElementById("main").innerHTML = htmlMovie;
		},
	});
}
