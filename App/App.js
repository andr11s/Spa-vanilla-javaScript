import { Header } from "./components/header.js";

export function App() {
	const d = document;
	let $root = d.getElementById("root");

	$root.appendChild(Header());
}
