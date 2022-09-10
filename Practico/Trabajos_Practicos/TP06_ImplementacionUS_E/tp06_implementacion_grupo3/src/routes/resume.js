import { useSelector } from "react-redux";
import Layout from "../components/layout";
import { deliveryMethodType, payMethodType } from "../types";
import Item from "../components/Item";

function Cash({ amount }) {
    return (
        <div className="form-control">
            <label className="input-group ">
                <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
                    Pagás con
                </span>
                <input type="text" className="input input-bordered disable !bg-white border-hidden" disabled value={amount} />
            </label>
        </div>
    )
}

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

export default function Resume({ resume }) {
    const estadoCompra = useSelector((state) => state);
    console.log(estadoCompra);
    const address = estadoCompra.cart.address.street + " " + estadoCompra.cart.address.number;
    const date = new Date(estadoCompra.cart.address.deliveryDate + " " + estadoCompra.cart.address.deliveryHour).toLocaleString("es-AR");
    let dateHour;
    if (estadoCompra.cart.address.deliveryMethod === deliveryMethodType.programmed) {
        dateHour = (date.split(',')[0].split("/")[0] + "/" + date.split(',')[0].split("/")[1] + "/" + date.split(',')[0].split("/")[2]
            + " - " + date.split(',')[1].split(':')[0] + ":" + `${date.split(',')[1].split(':')[1]} hs.`);
    }
    else {
        dateHour = "Lo antes posible";
    }
    const payment = estadoCompra.cart.payment.payMethod;
    const amount = estadoCompra.cart.payment.amount;
    const card = estadoCompra.cart.payment.cardNumber;


    return (
        <>
            <Layout step={4} nextButtonText={"Confirmar"} >
                <div
                    className="bg-coffee-500 bg-opacity-70 rounded-xl shadow my-4 text-white "
                >
                    <div className="card-body">
                        <span className="font-bold text-lg">{estadoCompra.cart.items.length} Items</span>
                        <div className="space-y-2">
                            {estadoCompra.cart.items.map((paquete, i) => (
                                <Item
                                    paquete={paquete}
                                    key={i}
                                />
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
                            <input type="text" className="input input-bordered disable !bg-white border-hidden" disabled value={address} />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group ">
                            <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
                                Fecha de entrega
                            </span>
                            <input type="text" className="input input-bordered disable !bg-white border-hidden" disabled value={dateHour} />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group ">
                            <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold">
                                Forma de pago
                            </span>
                            <input type="text" className="input input-bordered disable !bg-white border-hidden" disabled value={payment} />
                        </label>
                    </div>
                    {(payment === payMethodType.cash) ? <Cash amount={amount} /> : <Card card={card} />}
                </div>
            </Layout>
        </>
    )
}
