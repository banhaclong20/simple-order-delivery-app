const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  env: {
    MONGO_SRV:
      "mongodb+srv://root:Test1234@mrbanhmi-ws8pg.mongodb.net/test?retryWrites=true&w=majority",
    JWT_SECRET: "SADSAKJR3UKRU32IO42394923",
    CLOUDINARY_URL:
      "cloudinary://946184783831129:D3Qu8GBic2D8HZvyvLeoZUqnKeQ@banhaclongimagecloud",
    STRIPE_SECRET_KEY: "sk_test_jMyO1QPcSAtUadk3JAPMlcRB00TysDpYxa"
  },
  server: "serverless",
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
