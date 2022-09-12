import PropTypes from "prop-types";
import { useState, useRef } from "react";
import Layout from "../components/Layout";
import { payMethodType } from "../types/index.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ACTION_ERROR, updatePayAction } from "../app/actions";
import InputAlert from "../components/InputAlert";
import InputNumber from "../components/InputNumber";

function RadioButton({ isChecked, update, text }) {
  //TODO: borrar el padding del radio button
  return (
    <div className="form-control p-1">
      <label className="label cursor-pointer space-x-2">
        <span className="label-text text-white">{text}</span>
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

RadioButton.propTypes = {
  isChecked: PropTypes.bool,
  update: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

RadioButton.defaultProps = {
  isChecked: false,
  update: () => { },
  text: "",
};

export default function PayMethod() {
  const [isCash, setIsCash] = useState(true);
  const [showAlert, setshowAlert] = useState({ show: false, msg: "" });
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
    let payload = {};
    if (isCash) {
      payload = {
        payMethod: payMethodType.cash,
        amount: parseInt(amountEl.current.value),
      };
    } else {
      payload = {
        payMethod: payMethodType.card,
        cardNumber: parseInt(cardNumberEl.current.value),
        cardOwner: cardOwnerEl.current.value,
        expirationDate: {
          month: expirationMonthEl.current.value,
          year: expirationYearEl.current.value,
        },
        cvc: cvcEl.current.value,
      };
    }

    console.log(payload);
    const action = updatePayAction(payload, totalAmount);
    console.log("la action: ", action);
    if (action.type === ACTION_ERROR) {
      setshowAlert({ show: true, msg: action.msg });
    } else {
      dispatch(action);
      navigate("/resume");
    }
  };

  const estadoCompra = useSelector((state) => state);
  console.log(estadoCompra);

  return (
    <Layout step={3} redirect={sendData} nextButtonText={"Siguiente"}>
      <div>
        {/* Radio buttons */}
        <div className="bg-coffee-500 bg-opacity-70 font-semibold rounded-xl my-2">
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
                  <InputNumber refEl={amountEl} maxLength={7} />
                </label>
              </div>
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
                    <InputNumber refEl={cardNumberEl} maxLength={16} />
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
                    <select
                      ref={expirationMonthEl}
                      className="select select-bordered bg-white"
                    >
                      <option disabled></option>
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
                    <select
                      ref={expirationYearEl}
                      className="select select-bordered bg-white"
                    >
                      <option disabled></option>
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
                    <InputNumber refEl={cvcEl} maxLength={3} />
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <InputAlert action={showAlert} close={setshowAlert} />
    </Layout>
  );
}
