import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { paqueteType } from "../types/index";
import CartIcon from "../svg/Cart";
import NextButton from "./NextButton";
import Item from "./Item";
import { useLocation } from "react-router-dom";
import person from "../images/person.jpg";

Item.prototype = {
  paquete: paqueteType.isRequired,
};

export default function Layout({ children, step, nextButtonText, redirect }) {
  let carrito = useSelector((state) => state.cart.items);
  let total = useSelector((state) => state.cart.total);
  const { pathname } = useLocation();
  const cantidad = carrito.length;
  return (
    <div className="flex flex-col h-screen">
      <header>
        <div className="navbar bg-mangoTango-500 text-white">
          <div className="flex-1">
            <span className="normal-case text-xl font-semibold">
              DeliverEat!
            </span>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <CartIcon />
                  <span className="badge text-white badge-sm indicator-item">
                    {cantidad}
                  </span>
                </div>
              </label>
              <div
                tabIndex="0"
                className="mt-3 bg-coffee-500 bg-opacity-70 p-2 dropdown-content w-60 sm:w-96 shadow rounded-lg"
              >
                <div className="">
                  <span className="font-bold text-lg ">{cantidad} Items</span>
                  <div className="space-y-2">
                    {carrito.map((paquete, i) => (
                      <div
                        className="flex space-x-2 justify-center items-center"
                        key={i}
                      >
                        <img
                          className="w-10 h-10 rounded-full hidden sm:inline"
                          src={paquete.imgUrl}
                        />
                        <div className="flex flex-col grow">
                          <p className="sm:font-semibold">{paquete.title}</p>
                          <p className="pl-1 hidden sm:inline">
                            {paquete.description.slice(0, 25)}...
                          </p>
                        </div>
                        <div className="flex-col text-right hidden sm:flex">
                          <p>x{paquete.quantity}</p>
                          <p>Total: ${paquete.quantity * paquete.amount}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <span className="text-white">Subtotal: ${total}</span>
                </div>
              </div>
            </div>
            <div>
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={person} alt="avatar" />
                </div>
              </label>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-auto flex flex-col justify-between items-center bg-mangoTango-100 text-black p-1">
        {pathname === "/" || (
          <div className="p-2">
            <ul className="steps steps-vertical sm:steps-horizontal">
              <li
                className={`step before:!bg-mangoTango-500 after:!bg-mangoTango-500 ${
                  step >= 1
                    ? "step-primary"
                    : "after:!text-white before:!bg-coffee-500 after:!bg-coffee-500"
                }`}
              >
                Resumen
              </li>
              <li
                className={`step before:!bg-mangoTango-500 after:!bg-mangoTango-500 ${
                  step >= 2
                    ? "step-primary"
                    : "after:!text-white before:!bg-coffee-500 after:!bg-coffee-500"
                }`}
              >
                Envío
              </li>
              <li
                className={`step before:!bg-mangoTango-500 after:!bg-mangoTango-500 ${
                  step >= 3
                    ? "step-primary"
                    : "after:!text-white before:!bg-coffee-500 after:!bg-coffee-500"
                }`}
              >
                Forma de pago
              </li>
              <li
                className={`step before:!bg-mangoTango-500 after:!bg-mangoTango-500 ${
                  step >= 4
                    ? "step-primary"
                    : "after:!text-white before:!bg-coffee-500 after:!bg-coffee-500"
                }`}
              >
                Confirmación
              </li>
            </ul>
          </div>
        )}
        {children}
        <NextButton monto={total} texto={nextButtonText} redirect={redirect} />
      </main>
      <footer className="footer footer-center p-4 bg-mangoTango-500 text-white">
        <div>
          <p>Copyright © 2022 - All right reserved by DeliverEat!</p>
        </div>
      </footer>
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node,
  step: PropTypes.number,
  redirect: PropTypes.func,
  nextButtonText: PropTypes.string,
};

Layout.defaultProps = {
  children: null,
  step: 1,
  nextButtonText: "Siguiente",
};
