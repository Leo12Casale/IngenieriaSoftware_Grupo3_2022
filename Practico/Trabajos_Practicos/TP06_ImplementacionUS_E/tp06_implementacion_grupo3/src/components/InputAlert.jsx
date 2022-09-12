export default function InputAlert({ action, close }) {
  if (!action.show) {
    return;
  }
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center p-10 z-10">
      <div
        className="absolute top-0 left-0 w-screen h-screen"
        onClick={() => close({ show: false, msg: "" })}
      ></div>
      <div className="alert alert-warning shadow-lg z-10">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info flex-shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span className="">{action.msg}</span>
        </div>
        <div className="flex-none">
          <button
            className="btn text-white"
            onClick={() => close({ show: false, msg: "" })}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
