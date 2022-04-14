import React from "react";

export const SelectClase = ({ form, setForm, setShowPlan, setNextInicio }) => {
  const onChangeSelect = (e) => {
    const clase = e.target.value;
    setShowPlan(false);
    setNextInicio(false);
    if (clase === "taller" || clase === "examen")
      setForm({
        ...form,
        selectClase: clase,
        checkInicio: "taller/examen",
      });
    else if (clase === "pelicula") {
      setForm({
        selectClase: "pelicula",
        inputSaber: "",
        checkInicio: "pelicula",
      });
      setNextInicio(true);
    } else
      setForm({
        ...form,
        checkInicio: null,
        selectClase: clase,
      });
  };

  return (
    <select
      name="selectClase"
      id="select"
      className="form-select form-select-lg mb-3 block w-full px-6 py-2 text-xl font-normal  text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      onChange={onChangeSelect}
    >
      <option value="teoria">Clase teórica</option>
      <option value="lab">Laboratorio</option>
      <option value="pelicula">Pelicula</option>
      <option value="taller">Taller</option>
      <option value="examen">Examen</option>
    </select>
  );
};
