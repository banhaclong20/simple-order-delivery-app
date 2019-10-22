const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://www.mrbanhmi.shop"
    : "http://localhost:3000";

export default baseUrl;
