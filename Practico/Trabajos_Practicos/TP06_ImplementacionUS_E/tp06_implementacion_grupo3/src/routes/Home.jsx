import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Layout totalInical={true} nextButtonText={"Realizar Pedido"} step={1}>
      <div className="card card-side bg-coffee-500 w-fit shadow-xl bg-opacity-70 text-white">
        <div className="card-body p-4 grow text-2xl font-bold">
          <h2>CARRITO VACÍO!</h2>
        </div>
      </div>
      <div className="sticky bottom-0 left-0 right-0 font-medium text-neutral-focus flex flex-row justify-end space-x-2 sm:items-center sm:space-x-3 sm:space-y-0 p-4">
        <button
          className="btn bg-mangoTango-500 text-white p-3 rounded-md shadow-xl border-0 h-fit"
          onClick={() => navigate("/order")}
        >
          Cargar Carrito
        </button>
      </div>
    </Layout>
  );
}
