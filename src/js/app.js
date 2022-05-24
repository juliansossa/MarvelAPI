const obtenerDatos = async () => {
    // 198393e811f89d60ade9fed45f8cfbb00fb1f6d67a06e5ed27894cbe75a50b6b7c57e31ed

    // const datos = await fetch("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=a06e5ed27894cbe75a50b6b7c57e31ed&hash=6640616133ca308fe2d8bed822f9cd67");
    // console.log(datos);
    try {
        const respuesta = await fetch("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=a06e5ed27894cbe75a50b6b7c57e31ed&hash=6640616133ca308fe2d8bed822f9cd67");
        console.log(respuesta);

        const datos = await respuesta.json();
        console.log(datos.data.results[0].name);
    } catch (error) {
        console.log(error)
    }
}
obtenerDatos();