import { useState, useRef } from "react";
import Layout from "../components/layout";
import { useSelector } from "react-redux";

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
  var currentYear = new Date().getFullYear();
  var months = Array.from({ length: 12 }, (_, i) => i + 1);
  var years = Array.from({ length: 29 }, (_, i) => i + currentYear);

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
      <div className="w-full bottom-0 left-0 right-0  text-neutral-focus flex flex-col sm:flex-row items-end space-y-3 sm:items-center sm:space-x-3 sm:space-y-0">
        <div className="form-control">
          <label className="input-group ">
            <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
              Mes
            </span>
            <select className="select select-bordered bg-white">
              <option disabled selected></option>
              {months.map((el) => (
                <option value={el} key={el}>
                  {" "}
                  {el}{" "}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="form-control">
          <label className="input-group">
            <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
              Año
            </span>
            <select className="select select-bordered bg-white">
              <option disabled selected></option>
              {years.map((el) => (
                <option value={el} key={el}>
                  {" "}
                  {el}{" "}
                </option>
              ))}
            </select>
          </label>
        </div>
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
          className="radio bg-mangoTango-100 border-mangoTango-600 checked:bg-coffee-600 radio-accent"
          checked={isChecked}
          onChange={() => update()}
        />
      </label>
    </div>
  );
}

export default function PayMethod() {
  const [isCash, setIsCash] = useState(true);
  const cart = useSelector((state) => state.cart.items);
  const monto = useSelector((state) => state.cart.total);

  return (
    <Layout step={3}>
      <div>
        <h2>{cart.length}</h2>
        {/* Radio buttons */}
        <div>
          <RadioButton
            update={() => setIsCash(true)}
            isChecked={isCash}
            text={"Efectivo"}
          />
          <RadioButton
            update={() => {
              setIsCash(() => false);
            }}
            isChecked={!isCash}
            text={"Tarjeta de Crédito/Débito"}
          />
        </div>
        <div>{isCash ? <Cash totalAmount={monto} /> : <Card />}</div>
      </div>
    </Layout>
  );
}
