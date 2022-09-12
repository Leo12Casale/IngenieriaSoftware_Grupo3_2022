import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { emptyCartAction, loadCartAction } from "../app/actions";
import Layout from "../components/Layout";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Layout
      totalInical={true}
      nextButtonText={"Realizar Pedido"}
      step={1}
      redirect={() => navigate("/order")}
    >
      <div className="sticky bottom-0 left-0 right-0 font-medium text-neutral-focus flex flex-row justify-end space-x-2 sm:items-center sm:space-x-3 sm:space-y-0 p-4">
        <button
          className="btn bg-mangoTango-500 text-white p-3 rounded-md shadow-xl border-0 h-fit"
          onClick={() => dispatch(emptyCartAction())}
        >
          Vaciar Carrito
        </button>
        <button
          className="btn bg-mangoTango-500 text-white p-3 rounded-md shadow-xl border-0 h-fit"
          onClick={() => dispatch(loadCartAction())}
        >
          Cargar Carrito
        </button>
      </div>
    </Layout>
  );
}
