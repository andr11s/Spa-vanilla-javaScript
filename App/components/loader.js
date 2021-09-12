export function Loader() {
	let $img = document.createElement("img");
	$img.src = "App/assets/loader.svg";
	$img.alt = "Cargando";
	$img.classList.add("loader");
	return $img;
}
