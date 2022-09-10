import { paqueteType } from "../types";


export default function Item({ paquete }) {
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
        </div>
    );
}

Item.propType = {
    paquete: paqueteType.isRequired,
};


function Card({ card }) {
    return (
        <div className="form-control">
            <label className="input-group ">
                <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
                    Tarjeta N°
                </span>
                <input type="text" className="input input-bordered disable !bg-white border-hidden" disabled value={card} />
            </label>
        </div>
    )
}