const participantes = [

    "Santiago",
    "Pedro",
    "Luis",
    "Manuela",
    "Isabela"

];

const consultarGanador = () => {

    const ganador = participantes[Math.floor(Math.random() * participantes.length)];
    console.log(ganador);

}

module.exports = { consultarGanador };