import Layout from "../components/layout";
import PropTypes from "prop-types";
import { paqueteType } from "../types/index.js";


export default function Direction({ direction }) {

    return (
        <Layout>
            <div class="p-2">
                <ul class="steps">
                    <li class="step step-primary">Register</li>
                    <li class="step step-primary">Choose plan</li>
                    <li class="step">Purchase</li>
                    <li class="step">Receive Product</li>
                </ul>
            </div>
            <h1 class="text-white font-semibold">Datos de la entrega:</h1>
            <div class="bottom-0 left-0 right-0  text-neutral-focus flex flex-col sm:flex-row items-end justify-end space-y-3 sm:items-center sm:space-x-3 sm:space-y-0 p-4">
                <div class="form-control">
                    <label class="input-group ">
                        <span class=" bg-coffee-500 bg-opacity-70 text-white font-semibold">Calle</span>
                        <input type="text" class="input input-bordered  bg-white" />
                    </label>
                </div>
                <div class="form-control">
                    <label class="input-group">
                        <span class=" bg-coffee-500 bg-opacity-70 text-white font-semibold">Número</span>
                        <input type="number" class="input input-bordered bg-white " />
                    </label>
                </div>

            </div>
            <div class="form-control">
                <label class="input-group ">
                    <span class=" bg-coffee-500 bg-opacity-70 text-white font-semibold">Ciudad</span>
                    <select class="select select-bordered bg-white">
                        <option disabled selected>Elige la ciudad</option>
                        <option>Córdoba</option>
                        <option>Villa General Belgrano</option>
                        <option>San Fransisco</option>
                    </select>
                </label>
            </div>
            <div class="form-control p-4">

                <label class="input-group input-group-vertical">
                    <span class=" bg-coffee-500 bg-opacity-70 text-white font-semibold">Referencias</span>
                    <input class="input input-bordered bg-white" />
                </label>
            </div>
            <div class="form-control">
                <label class="input-group ">
                    <span class=" bg-coffee-500 bg-opacity-70 text-white font-semibold">Forma de entrega</span>
                    <select class="select select-bordered bg-white">
                        <option disabled selected>Elige la forma de entrega</option>
                        <option>Lo antes posible</option>
                        <option>Programar entrega</option>
                    </select>
                </label>
            </div>
            <div class="bottom-0 left-0 right-0  text-neutral-focus flex flex-col sm:flex-row items-end justify-end space-y-3 sm:items-center sm:space-x-3 sm:space-y-0 p-4">
                <div class="form-control">
                    <label class="input-group ">
                        <span class=" bg-coffee-500 bg-opacity-70 text-white font-semibold">Fecha</span>
                        <input type="date" class="input input-bordered  bg-white" />
                    </label>
                </div>
                <div class="form-control">
                    <label class="input-group ">
                        <span class=" bg-coffee-500 bg-opacity-70 text-white font-semibold">Hora</span>
                        <input type="time" class="input input-bordered  bg-white" />
                    </label>
                </div>
            </div>
        </Layout>
    );
}
