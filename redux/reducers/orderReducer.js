import {
  START_ORDER,
  ORDER_TYPE,
  SELECTED_ADDRESS_CARRYOUT,
  RESET_ORDER
} from "../types/orderType";

const INITIAL_STATE = {
  startOrder: false,
  orderType: undefined,
  selectedAddress: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_ORDER:
      return {
        ...state,
        startOrder: action.payload
      };
    case ORDER_TYPE:
      return {
        ...state,
        orderType: action.payload
      };
    case SELECTED_ADDRESS_CARRYOUT:
      return {
        ...state,
        selectedAddress: action.payload
      };
    case RESET_ORDER:
      return INITIAL_STATE;
    default:
      return state;
  }
};
