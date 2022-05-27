//Peticion a API de marvel
const obtenerDatos = async () => {
    try {
        const respuesta = await fetch("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=a06e5ed27894cbe75a50b6b7c57e31ed&hash=6640616133ca308fe2d8bed822f9cd67");
        
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
        console.error(error);
    }
}
obtenerDatos();

//recibe los datos
const mostrarDatos = async (array) => {
    let personajes = "";
    //metodo forEach el cual itera los elementos del array
    //para mostrarlos en html
    array.forEach(x=>{
        personajes += `
        <div class="card">
            <img class="card__img" src="${x.thumbnail.path}.${x.thumbnail.extension}"></img>
            <p class="card__paragraph" class="card__img">${x.name}</p>
        </div>
        `
    });

    document.getElementById("container-cards").innerHTML = personajes;
}