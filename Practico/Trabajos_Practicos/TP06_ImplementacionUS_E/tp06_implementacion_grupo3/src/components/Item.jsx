import { paqueteType } from "../types";

export default function Item({ paquete }) {
  return (
    <div className="flex space-x-2 justify-center items-center">
      <img
        className="w-10 h-10 rounded-full"
        src={paquete.imgUrl}
        alt={"Foto del paquete"}
      />
      <div className="flex flex-col grow">
        <p className="font-semibold">{paquete.title}</p>
        <p className="pl-1 hidden sm:inline">{paquete.description}</p>
      </div>
      <div className="flex flex-col text-right">
        <p>x{paquete.quantity}</p>
        <p>Total: ${paquete.quantity * paquete.amount}</p>
      </div>
    </div>
  );
}

Item.propType = {
  paquete: paqueteType.isRequired,
};
