import { useState, useRef, useReducer } from "react";
import Layout from "../components/layout";
import { payMethodType } from "../types/index.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ACTION_ERROR, updatePayAction } from "../app/actions";

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
  const [esValido, setValidar] = useState(true);
  const totalAmount = useSelector((state) => state.cart.total);
  var currentYear = new Date().getFullYear();
  var months = Array.from({ length: 12 }, (_, i) => i + 1);
  var years = Array.from({ length: 29 }, (_, i) => i + currentYear);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const amountEl = useRef(null);
  const cardNumberEl = useRef(null);
  const cardOwnerEl = useRef(null);
  const expirationMonthEl = useRef(null);
  const expirationYearEl = useRef(null);
  const cvcEl = useRef(null);

  const sendData = () => {
    var payload = {};
    if (isCash) {
      payload = {
        ...payload,
        payMethod: payMethodType.cash,
        amount: amountEl.current.value,
      };
    }
    else {
      payload = {
        ...payload,
        payMethod: payMethodType.card,
        cardNumber: parseInt(cardNumberEl.current.value),
        cardOwner: cardOwnerEl.current.value,
        expirationDate: {
          month: expirationMonthEl.current.value,
          year: expirationYearEl.current.value,
        },
        cvc: parseInt(cvcEl.current.value),
      };
    }
    console.log(payload);
    const action = updatePayAction(payload, totalAmount);
    if (action.type === ACTION_ERROR) console.log(action.msj)
    else {
      dispatch(action);
      navigate("/resume");
    }
  };


  return (
    <Layout
      step={3}
      redirect={sendData}
      nextButtonText={"Siguiente"}>
      <div>
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
        <div>
          {isCash ? (
            <div>
              <div className="form-control">
                <label className="input-group">
                  <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
                    Monto
                  </span>
                  <input
                    ref={amountEl}
                    type="number"
                    className="input input-bordered bg-white"
                    onBlur={() => {
                      setValidar(
                        totalAmount <= parseFloat(amountEl.current.value)
                      );
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
          ) : (
            <div className="space-y-5">
              {/* Número de la tarjeta */}
              <div>
                <div className="form-control">
                  <label className="input-group">
                    <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
                      Número de tarjeta
                    </span>
                    <input
                      ref={cardNumberEl}
                      type="number"
                      className="input input-bordered bg-white"
                    />
                  </label>
                </div>
              </div>
              {/* Nombre de titular */}
              <div className="form-control">
                <label className="input-group ">
                  <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
                    Nombre del titular
                  </span>
                  <input
                    ref={cardOwnerEl}
                    type="text"
                    className="input input-bordered  bg-white"
                  />
                </label>
              </div>
              {/* Fecha de vencimiento */}
              <div className="w-full bottom-0 left-0 right-0  text-neutral-focus flex flex-row sm:items-center space-x-3 ">
                <div className="form-control">
                  <label className="input-group ">
                    <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
                      Mes
                    </span>
                    <select ref={expirationMonthEl} className="select select-bordered bg-white">
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
                    <select ref={expirationYearEl} className="select select-bordered bg-white">
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
                    <input
                      ref={cvcEl}
                      type="number"
                      className="input input-bordered bg-white"
                    />
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
