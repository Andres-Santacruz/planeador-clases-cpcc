import { useState, useContext, createContext } from "react";
import App from "../App";

const initialValues = {
  selectClase: "teoria",
  inputSaber: "",
  checkInicio: null,
};

const contextClases = createContext();

export const useClases = () => {
  const contextApp = useContext(contextClases);
  return contextApp;
};

export const AppContainer = () => {
  const [form, setForm] = useState(initialValues);
  return (
    <contextClases.Provider value={{ form, setForm }}>
      <App />
    </contextClases.Provider>
  );
};
