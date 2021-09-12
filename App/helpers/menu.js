const d = document;

d.addEventListener("click", (e) => {
	$menuicons = d.querySelector(".menu-icons");
	$nav = d.querySelector("nav");

	if (e.target.matches(".menu-icons *")) {
		$menuicons.firstElementChild.classList.toggle("none");
		$menuicons.lastElementChild.classList.toggle("none");
		$nav.classList.toggle("none");
	}
});
