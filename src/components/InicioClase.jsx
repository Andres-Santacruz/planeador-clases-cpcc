import React from "react";
import { useClases } from "../context/AppContainer";

export const InicioClase = ({ setShowPlan }) => {
  const { form, setForm } = useClases();

  const onChangeRadio = (e) => {
    setForm({
      ...form,
      checkInicio: e.target.value,
    });
    setShowPlan(false);
  };

  return (
    <div className="sm:w-4/12 mt-2">
      <h3 className="text-2xl">El inicio de tu clase sera:</h3>
      <div className="flex justify-center flex-col sm:px-1">
        <div className="p-1">
          <input
            className="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="inicioClase"
            value="repaso"
            id="repaso"
            onChange={onChangeRadio}
            checked={form.checkInicio === "repaso"}
            disabled={
              form.selectClase === "taller" || form.selectClase === "examen"
            }
          />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="flexRadioDefault1"
          >
            Repaso
          </label>
        </div>
        <div className="p-1">
          <input
            className="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="inicioClase"
            id="juego"
            value="juego"
            onChange={onChangeRadio}
            checked={form.checkInicio === "juego"}
            disabled={
              form.selectClase === "taller" || form.selectClase === "examen"
            }
          />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="flexRadioDefault2"
          >
            Juego didáctico
          </label>
        </div>
        <div className="p-1">
          <input
            className="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="inicioClase"
            id="mesa"
            value="mesa"
            checked={form.checkInicio === "mesa"}
            onChange={onChangeRadio}
            disabled={
              form.selectClase === "taller" || form.selectClase === "examen"
            }
          />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="flexRadioDefault2"
          >
            Mesa redonda
          </label>
        </div>
        {(form.selectClase === "taller" || form.selectClase === "examen") && (
          <div className="p-1">
            <input
              className="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="inicioClase"
              id="mesa"
              value="taller/examen"
              checked={form.checkInicio === "taller/examen"}
              readOnly={true}
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="flexRadioDefault2"
            >
              Examen o Taller
            </label>
          </div>
        )}
      </div>
    </div>
  );
};
