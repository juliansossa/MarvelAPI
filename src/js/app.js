const obtenerDatos = async () => {
    try {
        const respuesta = await fetch("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=a06e5ed27894cbe75a50b6b7c57e31ed&hash=6640616133ca308fe2d8bed822f9cd67");

        const datos = await respuesta.json();

        const resultados = datos.data.results;
        console.log(resultados);

        const name = resultados.map(x=>x.name);
        console.log(name);
        mostrarDatos(name);

    } catch (error) {
        console.log(error);
    }
}
obtenerDatos();

const mostrarDatos = async (array) => {
    console.log(array);
    const Inner = document.getElementById("parrafo");
    Inner.innerText = "name: " + array[0]
}