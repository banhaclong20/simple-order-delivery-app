import React from "react";
import axios from "axios";
import SandwichesMenu from "../components/Index/SandwichesMenu";
import SmoothiesMenu from "../components/Index/SmoothiesMenu";
import baseUrl from "../utils/baseUrl";
import ContainerLayout from "../components/_App/ContainerLayout";
import { bannerContent } from "../utils/staticContent";

function Home({ menus, drinks }) {
  return (
    <ContainerLayout
      banner
      content
      bannerContent={bannerContent.menu}
      size="100px"
    >
      <SandwichesMenu sandwiches={menus.products} />
      <br />
      <SmoothiesMenu drinks={drinks.drinks} />
    </ContainerLayout>
  );
}

Home.getInitialProps = async ctx => {
  const menu_url = `${baseUrl}/api/products`;
  const drink_url = `${baseUrl}/api/drinks`;

  const [{ data: menus }, { data: drinks }] = await Promise.all([
    axios.get(menu_url),
    axios.get(drink_url)
  ]);

  return { menus, drinks };
};

export default Home;
