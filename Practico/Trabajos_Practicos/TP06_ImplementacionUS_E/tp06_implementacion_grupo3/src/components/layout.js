import PropTypes from "prop-types";
import { paqueteType } from "../types/index";
import CartIcon from "../svg/cart";
import CloseIcon from "../svg/close";

function Item({ paquete }) {
  return (
    <div className="flex space-x-2 justify-center items-center">
      <img
        className="w-10 h-10 rounded-full hidden sm:inline"
        src={paquete.imgUrl}
      />
      <div className="flex flex-col w-5/12">
        <p className="truncate font-semibold">{paquete.title}</p>
        <p className="truncate pl-1">{paquete.description}</p>
      </div>
      <div className="w-full flex flex-col text-right">
        <p>x{paquete.quantity}</p>
        <p>Total: ${paquete.quantity * paquete.amount}</p>
      </div>
      <div className="pl-3 w-10 h-10 overflow-hidden flex justify-center items-center -mr-3 text-white hover:text-fuchsia-300 transition-colors select-none">
        x
      </div>
    </div>
  );
}

Item.prototype = {
  paquete: paqueteType.isRequired,
};

export default function Layout({ children, carrito }) {
  const cantidad = carrito.length;
  const total = carrito.reduce(
    (prev, curr) => curr.amount * curr.quantity + prev,
    0
  );
  return (
    <div className="flex flex-col h-screen">
      <header>
        <div className="navbar bg-mangoTango-500 text-white">
          <div className="flex-1">
            <a className="normal-case text-xl font-semibold">DeliverEat!</a>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabindex="0" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <CartIcon />
                  <span className="badge text-white badge-sm indicator-item">
                    {cantidad}
                  </span>
                </div>
              </label>
              <div
                tabindex="0"
                className="mt-3 bg-coffee-500 bg-opacity-70 card card-compact dropdown-content sm:w-96 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg ">{cantidad} Items</span>
                  <div className="space-y-2">
                    {carrito.map((paquete, i) => (
                      <Item paquete={paquete} key={i} />
                    ))}
                  </div>
                  <span className="text-white">Subtotal: ${total}</span>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" alt="avatar" />
                </div>
              </label>
              <ul
                tabindex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-auto flex flex-col justify-center items-center bg-mangoTango-100 text-black">
        {children}
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
  carrito: PropTypes.arrayOf(paqueteType),
};

Layout.defaultProps = {
  children: null,
  carrito: [],
};
