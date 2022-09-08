import PropTypes from "prop-types";

export const paqueteType = PropTypes.shape({
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number,
  amount: PropTypes.number,
});

export const payType = {
  cash: "Efectivo",
  card: "Credito/Debito",
};
