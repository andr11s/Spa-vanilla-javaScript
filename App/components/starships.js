export function Starships(params) {
	let { name, model, manufacturer, starship_class } = params;

	return `
        <div class="starschips">
            <h2 class="starschips-title">${name}</h2>
            <p class="starschips-model">Modelo: ${model}</p>
            <p class="starschips-create">Creado por: ${manufacturer}</p>
            <p class="starschips-type">Tipo de nave: ${starship_class}</p>
        </div>
    `;
}
