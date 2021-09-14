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
			<nav class="menu"> 
					<a class="is-active" href="#/">Peliculas</a>
					<a href="#/people">Personajes</a>
					<a href="#/starships">Naves</a> 
			</nav>
			</div>
	`;

	return $header;
}
