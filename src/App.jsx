import { useState } from "react";
import { Advertencia } from "./components/Advertencia";
import { Header } from "./components/Header";
import { InicioClase } from "./components/InicioClase";
import { PlanDeClase } from "./components/PlanDeClase";
import { SelectClase } from "./components/SelectClase";
import { useClases } from "./context/AppContainer";

export default function App() {
  const { form, setForm } = useClases();
  const [next, setNext] = useState(false);
  const [nextInicio, setNextInicio] = useState(false);
  const [showPlan, setShowPlan] = useState(false);

  const onChangeInputSaber = (e) => {
    setForm({
      ...form,
      inputSaber: e.target.value,
    });
  };

  const btnClickNext = () => {
    const { inputSaber } = form;
    const arr = inputSaber.split(" ");
    const init = arr[0].toLowerCase();
    if (init === "el" || init === "la" || init === "los" || init === "las") {
      setNext(false);
      setNextInicio(true);
    } else setNext(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setShowPlan(true);
  };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center sm:min-w-full p-6">
        <h2 className="m-5 text-teal-900">
          Completa el formulario para generar tu plan de clase
        </h2>
        <div className="sm:w-4/12">
          <label htmlFor="" className="text-2xl">
            La temática general de tu clase es:
          </label>
          <SelectClase
            form={form}
            setForm={setForm}
            setShowPlan={setShowPlan}
            setNextInicio={setNextInicio}
          />
          {form.selectClase !== null && form.selectClase !== "pelicula" && (
            <>
              <h3>Escribe el saber</h3>
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-w focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput1"
                placeholder="Escribe el saber"
                value={form.inputSaber}
                onChange={onChangeInputSaber}
              />
              {next && <Advertencia setNext={setNext} />}
            </>
          )}
          {form.inputSaber.length > 3 && form.selectClase !== "pelicula" && (
            <button
              onClick={btnClickNext}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
            >
              Continuar
            </button>
          )}
        </div>
        {nextInicio && form.selectClase !== "pelicula" && (
          <InicioClase setShowPlan={setShowPlan} />
        )}

        {(form.checkInicio || form.selectClase === "pelicula") && nextInicio && (
          <form onSubmit={handleSubmit}>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            >
              GENERAR PLAN DE CLASE
            </button>
          </form>
        )}
        {showPlan && form.checkInicio && <PlanDeClase />}
      </main>
    </>
  );
}
