export const formatPrice = price => {
  return (
    price &&
    price.toLocaleString("en-US", { style: "currency", currency: "USD" })
  );
};
