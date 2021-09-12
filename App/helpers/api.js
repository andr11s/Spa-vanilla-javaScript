export async function Api(params) {
	let { url, cbSucess } = params;

	await fetch(url)
		.then((res) => (res.ok ? res.json() : Promise.reject(res)))
		.then((json) => cbSucess(json.results))
		.catch((err) => {
			console.log(err);
		});
}
