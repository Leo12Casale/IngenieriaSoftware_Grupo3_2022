import { useState, useRef } from "react";
import Layout from "../components/layout";
import NextButton from "../components/NextButton";
import mockData from "../utils/mockData";

function Cash({ totalAmount }) {
  const inputRef = useRef(null);

  const [esValido, setValidar] = useState(true);
  return (
    <div>
      <div className="form-control">
        <label className="input-group">
          <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
            Monto
          </span>
          <input
            ref={inputRef}
            type="number"
            className="input input-bordered bg-white"
            onBlur={() => {
              setValidar(totalAmount <= parseFloat(inputRef.current.value));
            }}
          />
        </label>
      </div>
      {!esValido && (
        <div className="alert alert-warning shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>El monto debe ser superior a ${totalAmount}</span>
          </div>
        </div>
      )}
    </div>
  );
}

function Card() {
  return (
    <div className="space-y-5">
      {/* Número de la tarjeta */}
      <div>
        <div className="form-control">
          <label className="input-group">
            <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
              Número de tarjeta
            </span>
            <input type="number" className="input input-bordered bg-white" />
          </label>
        </div>
      </div>
      {/* Nombre de titular */}
      <div className="form-control">
        <label className="input-group ">
          <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
            Nombre del titular
          </span>
          <input type="text" className="input input-bordered  bg-white" />
        </label>
      </div>
      {/* Fecha de vencimiento */}
      <div className="form-control">
        <label className="input-group ">
          <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
            Fecha
          </span>
          <input type="date" className="input input-bordered  bg-white" />
        </label>
      </div>
      {/* CVC */}
      <div>
        <div className="form-control">
          <label className="input-group">
            <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
              CVC
            </span>
            <input type="number" className="input input-bordered bg-white" />
          </label>
        </div>
      </div>
    </div>
  );
}

function RadioButton({ isChecked, update, text }) {
  //TODO: borrar el padding del radio button
  return (
    <div className="form-control">
      <label className="label cursor-pointer space-x-2">
        <span className="label-text text-black">{text}</span>
        <input
          type="radio"
          name="radio-method"
          className="radio bg-mangoTango-100 border-mangoTango-600  checked:bg-coffee-600"
          checked={isChecked}
          onChange={() => update()}
        />
      </label>
    </div>
  );
}

export default function PayMethod() {
  const [isCash, setIsCash] = useState(true);
  const monto = mockData.reduce(
    (prev, curr) => curr.amount * curr.quantity + prev,
    0
  );
  return (
    <Layout carrito={mockData} step={3}>
      {/* Radio buttons */}
      <div>
        <RadioButton
          update={() => setIsCash(true)}
          isChecked={isCash}
          text={"Efectivo"}
        />
        <RadioButton
          update={() => setIsCash(false)}
          isChecked={!isCash}
          text={"Tarjeta de Crédito/Débito"}
        />
      </div>
      <div>{isCash ? <Cash totalAmount={monto} /> : <Card />}</div>
    </Layout>
  );
}
