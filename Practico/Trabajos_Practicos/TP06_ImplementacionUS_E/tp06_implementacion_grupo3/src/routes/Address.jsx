import Layout from "../components/Layout";
import PropTypes from "prop-types";
import { cityType, deliveryMethodType, paqueteType } from "../types/index.js";
import mockData from "../utils/mockData";
import { useReducer, useRef, useState } from "react";
import { ACTION_ERROR, updateAddress } from "../app/actions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import InputAlert from "../components/InputAlert";
import InputNumber from "../components/InputNumber";

export default function Address() {
  const [isASAP, setIsASAP] = useState(true);
  const [showAlert, setshowAlert] = useState({ show: false, msg: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cityEl = useRef(null);
  const streetEl = useRef(null);
  const numberEl = useRef(null);
  const commentsEl = useRef(null);
  const deliveryMethodEl = useRef(null);
  const deliveryDateEl = useRef(null);
  const deliveryHourEl = useRef(null);

  const sendData = () => {
    let payload = {
      street: streetEl.current.value,
      number: parseInt(numberEl.current.value),
      city: cityEl.current.value,
      comments: commentsEl.current.value,
      deliveryMethod: deliveryMethodEl.current.value,
    };
    if (!isASAP) {
      payload = {
        ...payload,
        deliveryDate: deliveryDateEl.current.value,
        deliveryHour: deliveryHourEl.current.value,
      };
    }
    console.log(payload);
    const action = updateAddress(payload);

    if (action.type === ACTION_ERROR) {
      setshowAlert({ show: true, msg: action.msg });
    } else {
      dispatch(action);
      navigate("/payment");
    }
  };

  return (
    <Layout
      carrito={mockData}
      step={2}
      nextButtonText={"Siguiente"}
      redirect={sendData}
    >
      <div className="flex flex-col items-start space-y-3 ">
        {/* Ciudad */}
        <div className="form-control">
          <label className="input-group ">
            <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
              Ciudad
            </span>
            <select className="select select-bordered bg-white" ref={cityEl}>
              <option disabled selected>
                Elige la ciudad
              </option>
              <option>{cityType.cordoba}</option>
              <option>{cityType.villaGeneralBelgrano}</option>
              <option>{cityType.sanFrancisco}</option>
            </select>
          </label>
        </div>
        {/* Calle y número */}
        <div className="w-full bottom-0 left-0 right-0  text-neutral-focus flex flex-col sm:flex-row justify-end space-y-3 sm:items-center sm:space-x-3 sm:space-y-0">
          <div className="form-control">
            <label className="input-group ">
              <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
                Calle
              </span>
              <input
                type="text"
                className="input input-bordered  bg-white"
                ref={streetEl}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group">
              <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
                Número
              </span>
              <InputNumber refEl={numberEl} maxLength={5} />
            </label>
          </div>
        </div>
        {/* Referencias */}
        <div className="form-control w-full">
          <label className="input-group input-group-vertical">
            <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
              Referencias
            </span>
            <textarea
              className="textarea input-bordered bg-white"
              ref={commentsEl}
              maxlength="50"
            />
          </label>
        </div>
        {/* Forma de entrega */}
        <div className="form-control">
          <label className="input-group ">
            <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
              Forma de entrega
            </span>
            <select
              onChange={(e) => {
                if (e.target.value === deliveryMethodType.asSoonAsPossible) {
                  setIsASAP(true);
                } else {
                  setIsASAP(false);
                }
              }}
              className="select select-bordered bg-white"
              ref={deliveryMethodEl}
            >
              <option disabled selected>
                Elige la forma de entrega
              </option>
              <option value={deliveryMethodType.asSoonAsPossible}>
                {deliveryMethodType.asSoonAsPossible}
              </option>
              <option value={deliveryMethodType.programmed}>
                {deliveryMethodType.programmed}
              </option>
            </select>
          </label>
        </div>
        {/* Fecha y hora */}
        {isASAP || (
          <div className="bottom-0 left-0 right-0  text-neutral-focus flex flex-col sm:flex-row justify-end space-y-3 sm:items-center sm:space-x-3 sm:space-y-0">
            <div className="form-control">
              <label className="input-group ">
                <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
                  Fecha
                </span>
                <input
                  type="date"
                  className="input input-bordered  bg-white"
                  ref={deliveryDateEl}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="input-group ">
                <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
                  Hora
                </span>
                <input
                  type="time"
                  className="input input-bordered bg-white"
                  ref={deliveryHourEl}
                />
              </label>
            </div>
          </div>
        )}
      </div>

      <InputAlert action={showAlert} close={setshowAlert} />
    </Layout>
  );
}

//TODO: poner las proptypes necesarias
