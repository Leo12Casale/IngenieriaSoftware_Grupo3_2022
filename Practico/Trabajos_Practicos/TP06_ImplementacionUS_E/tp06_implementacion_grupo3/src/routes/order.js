import Layout from "../components/Layout";
import NextButton from "../components/NextButton";
import { paqueteType } from "../types/index.js";
import mockData from "../utils/mockData";

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
  const monto = mockData.reduce(
    (prev, curr) => curr.amount * curr.quantity + prev,
    0
  );

  return (
    <Layout carrito={mockData} step={1}>
      <div className="space-y-5 p-10 relative">
        {mockData.map((paquete, idx) => (
          <Paquete paquete={paquete} key={`idx-${idx}`} />
        ))}
      </div>
    </Layout>
  );
}
