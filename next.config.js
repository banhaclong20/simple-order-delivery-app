const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  env: {
    MONGO_SRV:
      "",
    JWT_SECRET: "",
    CLOUDINARY_URL:
      "",
    STRIPE_SECRET_KEY: ""
  },
  target: "serverless",
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 8192,
          publicPath: "/_next/static/",
          outputPath: "static/",
          name: "[name].[ext]"
        }
      }
    });
    return config;
  }
});
