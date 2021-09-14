const d = document;

d.addEventListener("click", (e) => {
	$menuicons = d.querySelector(".menu-icons");
	$menu = d.querySelector(".menu");

	if (e.target.matches(".menu-icons *")) {
		let menuNone = $menu.classList.toggle("menu-isactive");
		$menuicons.firstElementChild.classList.toggle("none");
		$menuicons.lastElementChild.classList.toggle("none");

		menuNone
			? $menu.classList.add("menu-isactive")
			: $menu.classList.remove("menu-isactive");
	}

	if (e.target.matches(".menu a")) {
		if (!e.target.matches(".menu a")) return false;
		$menu.classList.remove("menu-isactive");
	}
});
