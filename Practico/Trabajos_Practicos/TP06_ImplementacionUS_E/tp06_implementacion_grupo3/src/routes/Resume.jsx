import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import { deliveryMethodType, payMethodType } from "../types";
import Item from "../components/Item";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Cash({ amount }) {
  return (
    <div className="form-control">
      <label className="input-group ">
        <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
          Pagás con
        </span>
        <input
          type="text"
          className="input input-bordered disable !bg-white border-hidden"
          disabled
          value={"$" + amount}
        />
      </label>
    </div>
  );
}

Cash.propTypes = {
  amount: PropTypes.number,
};

Cash.defaultProps = {
  amount: 0,
};

function Card({ cardNumber }) {
  console.log(cardNumber);
  return (
    <div className="form-control">
      <label className="input-group ">
        <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
          Tarjeta N°
        </span>
        <input
          type="text"
          className="input input-bordered disable !bg-white border-hidden"
          disabled
          value={"**** **** **** " + `${String(cardNumber).substring(11, 15)}`}
        />
      </label>
    </div>
  );
}

Card.propTypes = {
  cardNumber: PropTypes.number,
};

Card.defaultProps = {
  cardNumber: 0,
};

export default function Resume() {
  const purchaseState = useSelector((state) => state);
  console.log(purchaseState);
  const address =
    purchaseState.cart.address.street + " " + purchaseState.cart.address.number;
  const date = new Date(
    purchaseState.cart.address.deliveryDate +
    " " +
    purchaseState.cart.address.deliveryHour
  ).toLocaleString("es-AR");
  let dateHour;
  if (
    purchaseState.cart.address.deliveryMethod === deliveryMethodType.programmed
  ) {
    dateHour =
      date.split(",")[0].split("/")[0] +
      "/" +
      date.split(",")[0].split("/")[1] +
      "/" +
      date.split(",")[0].split("/")[2] +
      " - " +
      date.split(",")[1].split(":")[0] +
      ":" +
      `${date.split(",")[1].split(":")[1]} hs.`;
  } else {
    dateHour = "Lo antes posible";
  }
  const payment = purchaseState.cart.payment.payMethod;
  const amount = purchaseState.cart.payment.amount;
  const card = purchaseState.cart.payment.cardNumber;
  console.log(card);

  let cardType = "MasterCard";
  if (card !== undefined && card.toString().startsWith(4)) cardType = "Visa";

  const navigate = useNavigate();
  const [isProcessing, setProcessing] = useState(false);
  const [isConfirmed, setConfirmed] = useState(false);

  const nextButtonClick = () => {
    setProcessing(true);
  };

  useEffect(() => {
    if (isProcessing) setTimeout(() => setConfirmed(true), 2000);
  }, [isProcessing]);

  return (
    <>
      <Layout step={4} nextButtonText={"Confirmar"} redirect={nextButtonClick}>
        <div className="bg-coffee-500 bg-opacity-70 rounded-xl shadow my-4 text-white">
          <div className="p-10">
            <span className="font-bold text-lg">
              {purchaseState.cart.items.length} Items
            </span>
            <div className="space-y-2">
              {purchaseState.cart.items.map((paquete, i) => (
                <Item paquete={paquete} key={i} />
              ))}
            </div>
          </div>
        </div>

        <div className="form-control space-y-5">
          <div className="form-control">
            <label className="input-group ">
              <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
                Direccion de entrega
              </span>
              <input
                type="text"
                className="input input-bordered disable !bg-white border-hidden h-full sm:h-auto"
                disabled
                value={address}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group ">
              <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
                Fecha de entrega
              </span>
              <input
                type="text"
                className="input input-bordered disable !bg-white border-hidden"
                disabled
                value={dateHour}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group ">
              <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
                Forma de pago
              </span>
              <input
                type="text"
                className="input input-bordered disable !bg-white border-hidden"
                disabled
                value={
                  payment === payMethodType.cash
                    ? `${payment}`
                    : `Tarjeta ${cardType}`
                }
              />
            </label>
          </div>
          {payment === payMethodType.cash ? (
            <Cash amount={amount} />
          ) : (
            <Card cardNumber={card} />
          )}
        </div>
      </Layout>
      {(isProcessing || isConfirmed) && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center p-10 z-10">
          <div className="absolute top-0 left-0 w-screen h-screen"></div>
          <div
            className={`alert ${
              // isConfirmed ? "alert-success" : "alert-info"
              isConfirmed ? "bg-coffee-500 text-white" : "alert-info"
              } shadow-lg  w-fit flex-col z-20`}
          >
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
                  d={"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}
                />
              </svg>
              {isConfirmed ? (
                <span>Compra realizada con éxito</span>
              ) : (
                <span>Procesando compra</span>
              )}
            </div>
            {isConfirmed ? (
              <button
                className="btn bg-yellow-500 text-black border-0 hover:bg-yellow-400"
                onClick={() => {
                  console.log("Click");
                  navigate("/");
                }}
              >
                Seguir comprando
              </button>
            ) : (
              <progress className="progress w-56"></progress>
            )}
          </div>
        </div>
      )}
    </>
  );
}
