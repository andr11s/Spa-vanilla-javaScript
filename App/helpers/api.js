export function Api(params) {
	let { url, cbSucess } = params;

	fetch(url)
		.then((res) => (res.ok ? res.json() : Promise.reject(res)))
		.then((json) => cbSucess(json))
		.catch((err) => {
			console.log(err);
		});
}
