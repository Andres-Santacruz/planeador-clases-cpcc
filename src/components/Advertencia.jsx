export const Advertencia = ({ setNext }) => {
  return (
    <div className=" my-3 border-2 flex justify-between relative p-4">
      <p className="text-red-700 max-w-xs">
        Debe tener género, comenzar con: 'el', 'la', 'los', 'las'
      </p>
      <button
        className="p-0 m-0 text-rose-900 border-red-600 absolute right-0 top-0 mr-1 font-bold"
        onClick={() => setNext(false)}
      >
        X
      </button>
    </div>
  );
};
