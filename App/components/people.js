export function People(params) {
	let { name, birth_year, gender } = params;

	return `
            <section class="people">
                <h2 class="people-name">${name}</h2>
                <p class="people-age">Cumpleaños ${birth_year}</p>
                <p class="people-gender">Genero: ${
									gender == "male" ? "Masculino" : "Femenino"
								}</p>
                <a href="#/search" data-name="${name}">Ver descripcion</a>
            </section>

        `;
}
