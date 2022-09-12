import Layout from "../components/Layout";
import { paqueteType } from "../types/index.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Paquete({ paquete }) {
  return (
    <div className="card card-side bg-coffee-500 shadow-xl bg-opacity-70 text-white">
      <div className="sm:flex w-full">
        <div className="sm:shrink-0">
          <img
            className="w-full object-cover sm:h-full sm:w-48"
            src={paquete.imgUrl}
            alt="Movie"
          />
        </div>
        <div className="card-body p-4 grow">
          <h2 className="card-title">{paquete.title}</h2>
          <p>{paquete.description}</p>
          <div className="card-actions flex items-center">
            <div className="text-white font-semibold rounded-md w-fit">
              x{paquete.quantity}
            </div>
            <span className="grow"></span>
            <div className="bg-mangoTango-400 stat bg-opacity-40 text-white rounded-md w-fit">
              ${paquete.amount} c/u
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Paquete.propTypes = {
  paquete: paqueteType.isRequired,
};

Paquete.defaultProps = {
  imgUrl: "https://placeimg.com/300/300/arch",
  title: "Hamburguesa de Messi",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, id sequi nostrum harum perspiciatis at necessitatibus expedita",
  quantity: 2,
  amount: 1700,
};

export default function Order() {
  const cart = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const sendData = () => {
    if (cart === undefined || cart.length === 0) navigate("/");
    else navigate("/delivery-address");
  };

  console.log(cart);
  return (
    <Layout
      step={1}
      redirect={sendData}
      nextButtonText={
        cart === undefined || cart.length === 0 ? "Volver" : "Realizar Pedido"
      }
    >
      {cart === undefined || cart.length === 0 ? (
        <div className="alert alert-error shadow-lg z-10 w-fit">
          <div>
            {" "}
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
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="">Carrito Vacío</span>
          </div>
        </div>
      ) : (
        <div className="space-y-5 p-10 relative">
          {cart.map((paquete, idx) => (
            <Paquete paquete={paquete} key={`idx-${idx}`} />
          ))}
        </div>
      )}
    </Layout>
  );
}
