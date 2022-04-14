import data from "../data.json";

export const generardorClase = (selectClase, inputSaber, checkInicio) => {
  const randomNum1y3 = getRamdonNumInteval(0, 2);

  const desempeño = genDesempeno(selectClase, inputSaber, data, randomNum1y3);

  const indicador =
    selectClase !== "pelicula"
      ? `${data[0].indicador.verbo[getRamdonNumInteval(0, 4)]} ${inputSaber} 
    ${"\n *"}
    ${data[0].indicador.verbo[5]} ${inputSaber}`
      : "Presentar pelicula";

  const competencia =
    selectClase !== "pelicula"
      ? `${getRamdonVerbo(data[0].competencia.verbo)} ${inputSaber} \n - ${
          data[0].competencia.complemento[getRamdonNumInteval(0, 4)]
        } - ${data[0].competencia.complemento[getRamdonNumInteval(0, 4)]}`
      : data[0].competencia.complemento[getRamdonNumInteval(0, 4)];

  const inicioClase =
    genMotivacion(selectClase, checkInicio, data, inputSaber) +
    data[0].metodologia.motivacion.fin;

  const desarrollo = genDesarrollo(selectClase, inputSaber, data);

  const finalClase = genFinalClase(selectClase, data);

  const metodologia = `
    Motivación: ${inicioClase}  - \n
    Desarrollo: ${desarrollo}  - \n
    Finalización: ${finalClase}
  `;

  const planDeClase = [
    {
      title: "Desempeño",
      cuerpo: desempeño,
    },
    {
      title: "Indicador (-es) de desempeño:",
      cuerpo: indicador,
    },
    {
      title: "Saberes (Tema(s)):",
      cuerpo: inputSaber,
    },
    {
      title: "Competencia a desarrollar:",
      cuerpo: competencia,
    },
    {
      title: "Estrategia metodológica y descripción",
      cuerpo: metodologia,
    },
  ];
  return planDeClase;
};

const getRamdonNumInteval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRamdonVerbo = (arr) => {
  return arr[getRamdonNumInteval(0, arr.length - 1)];
};

const genMotivacion = (selectClase, checkInicio, data, inputSaber) => {
  return checkInicio === "juego"
    ? data[0].metodologia.motivacion.inicio.juego
    : checkInicio === "repaso"
    ? data[0].metodologia.motivacion.inicio.repaso
    : checkInicio === "mesa"
    ? data[0].metodologia.motivacion.inicio.mesa
    : checkInicio === "taller/examen"
    ? data[0].metodologia.motivacion.inicio.tallerExamen +
      `${selectClase} sobre ${inputSaber}`
    : "Se motivará a los estudiantes con una pelicula de cine o un video de Youtube";
};

const genDesempeno = (selectClase, inputSaber, datos, randomNum1y3) => {
  if (selectClase === "teoria") {
    return `${getRamdonVerbo(datos[0].desempeño.verbo)} ${inputSaber} ${
      datos[0].desempeño.para[randomNum1y3]
    } ${datos[0].desempeño.final[randomNum1y3]}`;
  } else if (selectClase === "taller" || selectClase === "examen") {
    return (
      "Utiliza los conceptos vistos en clase para solucionar problemas sobre " +
      inputSaber
    );
  } else if (selectClase === "lab") {
    return `Realiza experimentos sobre ${inputSaber}, además formula hipótesis sobre los resultados obtenidos`;
  }
  return "Respeta los espacios lúdicos para compartir con sus compañeros";
};

const genDesarrollo = (selectClase, inputSaber, datos) => {
  const res = datos[0].metodologia.desarrollo[selectClase];
  if (selectClase === "teoria") {
    const num = getRamdonNumInteval(0, 3);
    console.log("este es res", res);
    const clase = `${res.inicio[num]} ${inputSaber} ${res.fin}`;
    return clase;
  }
  return res;
};

const genFinalClase = (selectClase, datos) =>
  datos[0].metodologia.finalizacion[selectClase];
