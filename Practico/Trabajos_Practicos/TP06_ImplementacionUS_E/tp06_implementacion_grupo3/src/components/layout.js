import PropTypes from "prop-types";
import { paqueteType } from "../types/index.js";

export default function Layout({ children, carrito }) {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <div class="navbar bg-base-100 shadow-md">
          <div class="flex-1">
            <a class="normal-case text-xl">DeliverEat!</a>
          </div>
          <div class="flex-none">
            <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn btn-ghost btn-circle">
                <div class="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span class="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <div
                tabindex="0"
                class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div class="card-body">
                  <span class="font-bold text-lg">8 Items</span>
                  <span class="text-info">Subtotal: $999</span>
                </div>
              </div>
            </div>
            <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" alt="avatar" />
                </div>
              </label>
              <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a class="justify-between">Profile</a>
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

      <main className="flex-auto flex flex-col justify-center items-center bg-slate-600">
        {children}
      </main>
      <footer class="footer footer-center p-4 bg-base-300 text-base-content">
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
