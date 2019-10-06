import React from "react";
import axios from "axios";
import ProductList from "../components/Index/ProductList";
import ProductPagination from "../components/Index/ProductPagination";
import baseUrl from "../utils/baseUrl";

function Home({ products, totalPages }) {
  return (
    <div className="container-comingsoon">
      <div className="hero">
        <p>MrBanhMi.shop</p>
        <h1>COMING SOON</h1>
        <hr />
        <p>Our shop is opening soon, stay tune!</p>
      </div>
      <style global jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Dosis");

        #menu {
          display: none !important;
        }

        .ui.container {
          padding-top: 0px !important;
          min-width: 100%;
          margin: 0 !important;
        }

        body {
          margin: 0;
          padding: 0;
        }

        .container-comingsoon {
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)
            ),
            url(https://res.cloudinary.com/banhaclongimagecloud/image/upload/v1570320338/Grilled-Pork-Banh-Mi-Sandwich_dnfez7.jpg);
          height: 100vh;
          background-position: center;
          background-size: cover;
        }
        .hero {
          top: 50%;
          left: 50%;
          position: absolute;
          transform: translate(-50%, -50%);
          color: #fff;
          text-align: center;
          font-family: "Dosis", sans-serif;
        }
        h1 {
          font-size: 60px;
          letter-spacing: 15px;
        }
        hr {
          width: 50%;
          margin: 30px auto;
          border: 1.5px solid #fff;
        }
        p {
          font-size: 30px;
          margin-bottom: 30px;
          font-family: "Dosis", sans-serif;
        }
        #launch {
          font-size: 40px;
          word-spacing: 20px;
        }
      `}</style>
    </div>
  );
}

Home.getInitialProps = async ctx => {
  const page = ctx.query.page ? ctx.query.page : "1";
  const size = 9;
  const url = `${baseUrl}/api/products`;
  const payload = { params: { page, size } };
  // fetch data on server
  const response = await axios.get(url, payload);
  // return response data as an object
  return response.data;
  // note: this object will be merged with existing props
};

export default Home;
