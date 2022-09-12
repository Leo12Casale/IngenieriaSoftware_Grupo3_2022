import { deliveryMethodType, payMethodType } from "../types";
import mockData from "../utils/mockData";
import {
  EMPTY_CART,
  LOAD_CART,
  TEST,
  UPDATE_ADDRESS,
  UPDATE_PAY,
} from "./actions";

const total = mockData.reduce(
  (prev, curr) => curr.amount * curr.quantity + prev,
  0
);

const initialState = {
  items: mockData,
  total,
  address: {
    street: "",
    number: 0,
    city: "",
    comments: "",
    deliveryMethod: deliveryMethodType.asSoonAsPossible,
    deliveryDate: new Date(),
    deliveryHour: new Date().getHours(),
  },
  payment: {
    payMethod: payMethodType.cash,
    amount: 0,
    cardNumber: 0,
    cardOwner: "",
    expirationDate: {
      month: 0,
      year: 0,
    },
    cvc: 0,
  },
};

// Reducer
export default function cartReducer(state = { ...initialState }, action) {
  switch (action.type) {
    case UPDATE_PAY:
      return { ...state, payment: { ...action.payload } };
    case UPDATE_ADDRESS:
      return { ...state, address: action.payload };
    case EMPTY_CART:
      return { ...state, items: [] };
    case LOAD_CART:
      let total = mockData.reduce(
        (prev, curr) => curr.amount * curr.quantity + prev,
        0
      );
      return { ...state, items: [...mockData], total };
    case TEST:
      return { ...state, items: state.items.slice(0, -1) };
    default:
      return state;
  }
}
