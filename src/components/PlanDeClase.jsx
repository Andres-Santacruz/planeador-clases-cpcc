import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { useClases } from "../context/AppContainer";
import { generardorClase } from "../helpers/generardorClase";

const init = {
  0: false,
  1: false,
  2: false,
  3: false,
  4: false,
};

export const PlanDeClase = () => {
  const [plan, setPlan] = useState([]);
  const [copied, setCopied] = useState(init);
  const { form } = useClases();

  useEffect(() => {
    const { selectClase, inputSaber, checkInicio } = form;
    const planDeClase = generardorClase(selectClase, inputSaber, checkInicio);
    setPlan(planDeClase);
  }, [form]);

  //console.log(data);
  return (
    <div className="max-w-5xl rounded mt-4 flex flex-wrap justify-center items-center gap-2">
      {plan.map((el, i) => (
        <div className="px-6 py-4 mt-3 max-w-sm shadow-lg" key={el.title}>
          <h3 className="font-bold text-xl mb-2">{el.title}</h3>
          <p className="text-gray-700 text-base">{el.cuerpo}</p>
          <CopyToClipboard
            text={el.cuerpo}
            onCopy={() => setCopied({ ...init, [i]: true })}
          >
            <button
              className={` font-semibold py-2 px-4 border border-gray-300 rounded shadow block mx-auto mt-3 ${
                copied[i]
                  ? "bg-green-500 hover:bg-green-400 text-white"
                  : "bg-white hover:bg-gray-100 text-gray-600"
              }`}
            >
              {copied[i] ? "Copiado!!!" : "Click para Copiar"}
            </button>
          </CopyToClipboard>
        </div>
      ))}
    </div>
  );
};
