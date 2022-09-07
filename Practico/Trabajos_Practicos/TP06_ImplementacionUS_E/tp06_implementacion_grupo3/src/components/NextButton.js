export default function ({ monto, texto }) {
  return (
    <div className="sticky bottom-0 left-0 right-0 font-medium text-xl text-neutral-focus flex flex-col sm:flex-row items-end justify-end space-y-3 sm:items-center sm:space-x-3 sm:space-y-0 p-4">
      <div className="bg-brown p-3 rounded-md shadow-xl text-white w-fit">
        <p>Monto final: ${monto}</p>
      </div>
      <button className="btn bg-mangoTango-500 text-white p-3 rounded-md shadow-xl border-0 w-fit">
        {texto}
      </button>
    </div>
  );
}
