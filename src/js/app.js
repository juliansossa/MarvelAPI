const obtenerDatos = async () => {
    try {
        const respuesta = await fetch("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=a06e5ed27894cbe75a50b6b7c57e31ed&hash=6640616133ca308fe2d8bed822f9cd67");
        console.log(respuesta);
        
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            const resultados = datos.data.results;
            mostrarDatos(resultados);
        }
        else if (respuesta.status === 401) {
            console.error("Referencia no valida, error: " + respuesta.status)
        }
        else if (respuesta.status === 404) {
            console.error("La URL a la que está intentando acceder no existe, error: " + respuesta.status)
        }

    } catch (error) {
        console.log(error);
    }
}
obtenerDatos();

const mostrarDatos = async (array) => {
    let personajes = "";
    array.forEach(x=>{
        personajes += `
        <img src="${x.thumbnail.path}.${x.thumbnail.extension}"></img>
        <h3>${x.name}</h3>
        `
    });

    document.getElementById("container").innerHTML = personajes;
}