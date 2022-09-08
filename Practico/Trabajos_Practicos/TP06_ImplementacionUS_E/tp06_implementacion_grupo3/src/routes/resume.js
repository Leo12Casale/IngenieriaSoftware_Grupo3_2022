import Layout from "../components/layout";
import { payMethodType } from "../types";

function Cash({amount}){
    return(
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

function Card({card}){
    return (
        <div className="form-control">
            <label className="input-group ">
                <span className=" bg-coffee-500 bg-opacity-70 text-white font-semibold"> 
                Pagás con
                </span>
                <input type="text" className="input input-bordered disable !bg-white border-hidden" disabled value={card}/>
            </label>
        </div>
    )
}

export default function Resume({resume}) {
    const address = "La direccion a entregar";
    const date = "10/09/2022 20:30";
    const payment =  "Tarjeta de Crédito/Débito" // "Efectivo";
    const amount = 3000;
    const card = "**** **** **** 5184";
  return (
    <>
    <Layout step={4} btnText={"Confirmar"} >
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
                    <input type="text" className="input input-bordered disable !bg-white border-hidden" disabled value={date} />
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
