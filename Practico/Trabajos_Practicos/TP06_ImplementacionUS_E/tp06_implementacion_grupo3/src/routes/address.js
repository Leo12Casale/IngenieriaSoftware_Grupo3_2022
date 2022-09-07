import Layout from "../components/layout";
import PropTypes from "prop-types";
import { paqueteType } from "../types/index.js";
import mockData from "../utils/mockData";

export default function Address({ address }) {
  return (
    <Layout carrito={mockData} step={2}>
      <div className="flex flex-col items-start space-y-3 ">
        <div className="w-full bottom-0 left-0 right-0  text-neutral-focus flex flex-col sm:flex-row items-end justify-end space-y-3 sm:items-center sm:space-x-3 sm:space-y-0">
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
        <div className="form-control w-full">
          <label className="input-group input-group-vertical">
            <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
              Referencias
            </span>
            <textarea className="textarea input-bordered bg-white" />
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
        <div className="bottom-0 left-0 right-0  text-neutral-focus flex flex-col sm:flex-row items-end justify-end space-y-3 sm:items-center sm:space-x-3 sm:space-y-0">
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
      </div>
    </Layout>
  );
}

//TODO: poner las proptypes necesarias
