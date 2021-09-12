export function MoviesCard(params) {
	let { title, episode_id, director, producer, release_date } = params;
	let fecha = new Date(release_date).toLocaleDateString("es-Es");
	return `  <div class="movie">
                <h1 class="movie-title">${title}</h1>
                <h3 class="movie-episode">Episodio: ${episode_id}</h3>
                <div class="movie-descripcion">
                    <p>Director: ${director} </p>
                    <p>Producto:${producer}</p>
                </div>
                <p>Fechs de estreno: ${fecha}</p>
            </div>
    `;
}
