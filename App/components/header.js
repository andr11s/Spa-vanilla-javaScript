export function Header() {
	let $header = document.createElement("header");
	$header.classList.add("header");

	$header.innerHTML = `
		<div class="header-container">
			<div class="logo">
				<h2 class="logo-item">STAR WARS</h2>
			</div>
			<div class="menu-icons">
				<i class="menu-bar fas fa-bars"></i>
				<i class="menu-time fas fa-times-circle none"></i>
			</div>
		</div>
		<nav class="nav none">
			<ul class="menu">
				<li class="menu-item"><a class="is-active" href="#">Peliculas</a></li>
				<li class="menu-item"><a href="#">Personajes</a></li>
				<li class="menu-item"><a href="#">Naves</a></li>
			</ul>
		</nav>
	`;

	return $header;
}
