import { Header } from "./components/header.js";
import { Loader } from "./components/loader.js";
import { Main } from "./components/main.js";
import { Router } from "./components/router.js";

export function App() {
	const d = document;
	let $root = d.getElementById("root");

	$root.appendChild(Header());
	$root.appendChild(Main());
	$root.appendChild(Loader());

	Router();
}
