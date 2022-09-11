export default function NextButton ({ monto, texto, redirect }) {
  return (
    <div className="sticky bottom-0 left-0 right-0 font-medium text-neutral-focus flex flex-row justify-end space-x-2 sm:items-center sm:space-x-3 sm:space-y-0 p-4">
      <div className="bg-brown p-3 rounded-md shadow-xl text-white h-fit">
        <p>Monto final: ${monto}</p>
      </div>
      <button
        className="btn bg-mangoTango-500 text-white p-3 rounded-md shadow-xl border-0 h-fit"
        onClick={() => redirect()}
      >
        {texto}
      </button>
    </div>
  );
}
