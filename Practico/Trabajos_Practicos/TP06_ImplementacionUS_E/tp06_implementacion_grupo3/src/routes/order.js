import Layout from "../components/layout";
import PropTypes from "prop-types";
import { paqueteType } from "../types/index.js";

function Paquete({ paquete }) {
  return (
    <div class="card card-side bg-base-100 shadow-xl">
      {/* <figure class="rounded-l-md overflow-hidden h-full w-72 self-center">
          <img src={paquete.imgUrl} alt="Movie" />
        </figure> */}
      <div class="sm:flex">
        <div class="sm:shrink-0">
          <img
            class="h-48 w-full object-cover sm:h-full sm:w-48"
            src={paquete.imgUrl}
            alt="Movie"
          />
        </div>
        <div class="card-body p-4">
          <h2 class="card-title">{paquete.title}</h2>
          <p>{paquete.description}</p>
          <div class="card-actions flex items-center">
            <div class="text-white font-semibold rounded-md w-fit">
              x{paquete.quantity}
            </div>
            <span class="grow"></span>
            <div class="bg-primary stat text-white rounded-md w-fit">
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
  imgUrl: "https://placeimg.com/500/500/arch",
  title: "Hamburguesa de Messi",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, id sequi nostrum harum perspiciatis at necessitatibus expedita",
  quantity: 2,
  amount: 1700,
};

const mockData = [
  {
    imgUrl: "https://placeimg.com/500/500/arch",
    title: "Hamburguesa de Messi",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, id sequi nostrum harum perspiciatis at necessitatibus expedita",
    quantity: 2,
    amount: 1700,
  },
  {
    imgUrl: "https://placeimg.com/500/500/arch",
    title: "Hamburguesa de Messi",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, id sequi nostrum harum perspiciatis at necessitatibus expedita",
    quantity: 2,
    amount: 1700,
  },
  {
    imgUrl: "https://placeimg.com/500/500/arch",
    title: "Hamburguesa de Messi",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, id sequi nostrum harum perspiciatis at necessitatibus expedita",
    quantity: 2,
    amount: 1700,
  },
  {
    imgUrl: "https://placeimg.com/500/500/arch",
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
        {mockData.map((paquete, idx) => (
          <Paquete paquete={paquete} key={`idx-${idx}`} />
        ))}
        <div class="sticky bottom-0 left-0 right-0 font-medium text-xl text-neutral-focus flex flex-col sm:flex-row items-end justify-end space-y-3 sm:items-center sm:space-x-3 sm:space-y-0 p-4">
          <div class="bg-neutral-content p-3 rounded-md shadow-xl bg-opacity-70 w-fit">
            <p>Monto final: ${monto}</p>
          </div>
          <button class="btn bg-accent text-white p-3 rounded-md shadow-xl border-0 w-fit">
            Comprar
          </button>
        </div>
      </div>
    </Layout>
  );
}
