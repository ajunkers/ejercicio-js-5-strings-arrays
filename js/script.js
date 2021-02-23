console.log(esPalindromo("javascrípt invert?¿!ir array!!"));
console.log(esPalindromo("Arriba la birra!!"));

function esPalindromo(texto) {
	const signos = /[.,:;()_?¿!¡-\s]/g;
	const nuevoTexto = texto.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(signos, "");

	if (nuevoTexto.split("").reverse().join("") === nuevoTexto) {
		return true;
	} else {
		return false;
	}
}
