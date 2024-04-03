const pisos = [5, 15, 13, 2]; //Ingresar aquí los pisos
const inicial = 4; //Ingresar aquí el piso actual del elevador

elevador(pisos, inicial);

function elevador(pisos, inicial) {
  //Validar parámetros
  if (validaciones(pisos, inicial) === false) return;

  //Información inicial
  console.log("Arreglo de pisos: ", pisos);
  console.log("Piso inicial de ejecución: " + inicial);
  const direccionInicial =
    inicial < pisos[0]
      ? "Subiendo"
      : inicial > pisos[0]
      ? "Bajando"
      : "Estatico";
  console.log("Sentido inicial: " + direccionInicial);

  //Variable para manejar el piso actual
  let pisoActual = inicial;

  //Elevador en movimiento hasta completar los pisos ingresados
  pisos.unshift(inicial);
  while (pisos.length > 0) {
    const pisoIndex = pisos.findIndex((piso) => piso === pisoActual);

    //Comprobación de piso
    if (pisoIndex >= 0) {
      console.log("Elevador se detiene en el piso " + pisoActual);
      pisos.splice(pisoIndex, 1);
    } else console.log("Elevador en piso " + pisoActual);

    //Manejo de dirección del elevador
    if (pisoActual < pisos[0]) {
      if (pisos[0] > pisoActual && pisoIndex >= 0)
        console.log("Elevador subiendo");
      pisoActual++;
    } else {
      if (pisos[0] < pisoActual && pisos[0] >= 0 && pisoIndex >= 0)
        console.log("Elevador bajando");
      pisoActual--;
    }
  }
}

function validaciones(pisos, inicial) {
  //Validaciones número piso inicial
  if (!inicial) {
    console.log("Ingrese un piso");
    return false;
  }
  if (typeof inicial != "number") {
    console.log("Valor inválido para piso inicial");
    return false;
  }
  if (inicial <= 0 || inicial > 15) {
    console.log("Piso inicial incorrecto");
    return false;
  }

  //Validaciones array de pisos
  if (!Array.isArray(pisos)) {
    console.log("Valor inválido para array de pisos");
    return false;
  }
  if (pisos.length <= 0) {
    console.log("Ingrese un piso dentro del array");
    return false;
  }
  if (
    !pisos.every(
      (piso) =>
        typeof piso === "number" && !isNaN(piso) && piso > 0 && piso <= 15
    )
  ) {
    console.log("Valor inválido en el array");
    return false;
  }
}
