import Layout from "../components/layout";
import PropTypes from "prop-types";

function Paquete({ imgUrl, title, description, quantity, amount }) {
  return (
    <div class="card card-side bg-base-100 shadow-xl">
      <figure class="rounded-md overflow-hidden h-fit w-fit self-center ml-2">
        <img src={imgUrl} alt="Movie" />
      </figure>
      <div class="card-body p-4">
        <h2 class="card-title">{title}</h2>
        <p>{description}</p>
        <div class="card-actions flex items-center">
          <div class="text-white font-semibold rounded-md w-fit">
            x{quantity}
          </div>
          <span class="grow"></span>
          <div class="bg-primary stat text-white rounded-md w-fit">
            ${amount} c/u
          </div>
        </div>
      </div>
    </div>
  );
}

Paquete.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number,
  amount: PropTypes.number,
};

Paquete.defaultProps = {
  imgUrl: "https://placeimg.com/200/200/arch",
  title: "Hamburguesa de Messi",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, id sequi nostrum harum perspiciatis at necessitatibus expedita",
  quantity: 2,
  amount: 1700,
};

const mockData = [
  {
    imgUrl: "https://placeimg.com/200/200/arch",
    title: "Hamburguesa de Messi",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, id sequi nostrum harum perspiciatis at necessitatibus expedita",
    quantity: 2,
    amount: 1700,
  },
  {
    imgUrl: "https://placeimg.com/200/200/arch",
    title: "Hamburguesa de Messi",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, id sequi nostrum harum perspiciatis at necessitatibus expedita",
    quantity: 2,
    amount: 1700,
  },
  {
    imgUrl: "https://placeimg.com/200/200/arch",
    title: "Hamburguesa de Messi",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, id sequi nostrum harum perspiciatis at necessitatibus expedita",
    quantity: 2,
    amount: 1700,
  },
  {
    imgUrl: "https://placeimg.com/200/200/arch",
    title: "Hamburguesa de Messi",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, id sequi nostrum harum perspiciatis at necessitatibus expedita",
    quantity: 2,
    amount: 1700,
  },
];

export default function Order() {
  const monto = mockData.reduce(
    (prev, curr) => curr.amount * curr.quantity + prev,
    0
  );

  return (
    <Layout>
      <div class="space-y-5 p-10 relative">
        {mockData.map((pedido, idx) => (
          <Paquete
            imgUrl={pedido.imgUrl}
            title={pedido.title}
            description={pedido.description}
            quantity={pedido.quantity}
            amount={pedido.amount}
            key={`idx-${idx}`}
          />
        ))}
        <div class="sticky bottom-0 left-0 right-0 font-medium text-xl text-neutral-focus flex justify-end items-center space-x-3 p-4">
          <div class="bg-neutral-content p-3 rounded-md shadow-xl bg-opacity-70">
            <p>Monto final: ${monto}</p>
          </div>
          <button class="btn bg-accent text-white p-3 rounded-md shadow-xl border-0">
            Comprar
          </button>
        </div>
      </div>
      {/* <div class="toast">
        <div class="alert alert-info">
          <div>
            <span>New message arrived.</span>
          </div>
        </div>
      </div> */}
      {/* <div class="card w-96 bg-neutral text-neutral-content opacity-80">
        <div class="card-body items-center text-center">
          <h2 class="card-title">Resumen</h2>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Accept</button>
            <button class="btn btn-ghost">Deny</button>
          </div>
        </div>
      </div> */}
    </Layout>
  );
}
