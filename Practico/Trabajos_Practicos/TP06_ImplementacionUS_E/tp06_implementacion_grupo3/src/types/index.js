import PropTypes from "prop-types";

export const paqueteType = PropTypes.shape({
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number,
  amount: PropTypes.number,
});

export const deliveryMethodType = {
  asSoonAsPossible: "Lo antes posible",
  programmed: "Entrega programada",
};

export const cityType = {
  cordoba: "Córdoba",
  sanFrancisco: "San Francisco",
  villaGeneralBelgrano: "Villa General Belgrano",
};

export const payMethodType = {
  cash: "Efectivo",
  card: "Credito/Debito",
};
