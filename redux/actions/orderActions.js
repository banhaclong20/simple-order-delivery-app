import {
  START_ORDER,
  ORDER_TYPE,
  SELECTED_ADDRESS_CARRYOUT,
  RESET_ORDER
} from "../types/orderType";

const setStartOrder = data => ({
  type: START_ORDER,
  payload: data
});

const setOrderType = type => ({
  type: ORDER_TYPE,
  payload: type
});

const setSelectedAddress = data => ({
  type: SELECTED_ADDRESS_CARRYOUT,
  payload: data
});

const resetOrder = () => ({
  type: RESET_ORDER
});

export default {
  setStartOrder,
  setOrderType,
  setSelectedAddress,
  resetOrder
};
