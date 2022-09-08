import PropTypes from "prop-types";

export const paqueteType = PropTypes.shape({
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number,
  amount: PropTypes.number,
});

export const deliveryMethodType = {
  asSoonAsPossible: "As Soon as possible",
  programmed: "Programmed",
};

export const payMethodType = {
  cash: "Efectivo",
  card: "Credito/Debito",
};
