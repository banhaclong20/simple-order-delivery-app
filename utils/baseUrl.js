const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://mrbanhmi.banhaclong20.now.sh"
    : "http://localhost:3000";

export default baseUrl;
