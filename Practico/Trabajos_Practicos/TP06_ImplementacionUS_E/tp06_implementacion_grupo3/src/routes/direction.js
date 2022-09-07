import Layout from "../components/layout";
import PropTypes from "prop-types";
import { paqueteType } from "../types/index.js";

export default function Direction({ direction }) {
  return (
    <Layout>
      <div className="p-2">
        <ul className="steps">
          <li className="step step-primary">Register</li>
          <li className="step step-primary">Choose plan</li>
          <li className="step">Purchase</li>
          <li className="step">Receive Product</li>
        </ul>
      </div>
      <h1 className="text-white font-semibold">Datos de la entrega:</h1>
      <div className="bottom-0 left-0 right-0  text-neutral-focus flex flex-col sm:flex-row items-end justify-end space-y-3 sm:items-center sm:space-x-3 sm:space-y-0 p-4">
        <div className="form-control">
          <label className="input-group ">
            <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
              Calle
            </span>
            <input type="text" className="input input-bordered  bg-white" />
          </label>
        </div>
        <div className="form-control">
          <label className="input-group">
            <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
              Número
            </span>
            <input type="number" className="input input-bordered bg-white " />
          </label>
        </div>
      </div>
      <div className="form-control">
        <label className="input-group ">
          <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
            Ciudad
          </span>
          <select className="select select-bordered bg-white">
            <option disabled selected>
              Elige la ciudad
            </option>
            <option>Córdoba</option>
            <option>Villa General Belgrano</option>
            <option>San Fransisco</option>
          </select>
        </label>
      </div>
      <div className="form-control p-4">
        <label className="input-group input-group-vertical">
          <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
            Referencias
          </span>
          <input className="input input-bordered bg-white" />
        </label>
      </div>
      <div className="form-control">
        <label className="input-group ">
          <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
            Forma de entrega
          </span>
          <select className="select select-bordered bg-white">
            <option disabled selected>
              Elige la forma de entrega
            </option>
            <option>Lo antes posible</option>
            <option>Programar entrega</option>
          </select>
        </label>
      </div>
      <div className="bottom-0 left-0 right-0  text-neutral-focus flex flex-col sm:flex-row items-end justify-end space-y-3 sm:items-center sm:space-x-3 sm:space-y-0 p-4">
        <div className="form-control">
          <label className="input-group ">
            <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
              Fecha
            </span>
            <input type="date" className="input input-bordered  bg-white" />
          </label>
        </div>
        <div className="form-control">
          <label className="input-group ">
            <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
              Hora
            </span>
            <input type="time" className="input input-bordered  bg-white" />
          </label>
        </div>
      </div>
    </Layout>
  );
}

//TODO: poner las proptypes necesarias
