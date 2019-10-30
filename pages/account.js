import AccountHeader from "../components/Account/AccountHeader";
import AccountOrders from "../components/Account/AccountOrders";
import AccountPermissions from "../components/Account/AccountPermissions";
import { parseCookies } from "nookies";
import baseUrl from "../utils/baseUrl";
import axios from "axios";
import { connect } from "react-redux";
import ContainerLayout from "../components/_App/ContainerLayout";
import { bannerContent } from "../utils/staticContent";

function Account({ user, orders }) {
  return (
    <ContainerLayout
      banner
      content
      bannerContent={bannerContent.account}
      inverted
      size="180px"
    >
      <AccountHeader {...user} />
      <AccountOrders orders={orders} />
      {user && user.role === "root" && <AccountPermissions />}
    </ContainerLayout>
  );
}

Account.getInitialProps = async ctx => {
  const { token } = parseCookies(ctx);
  if (!token) {
    return { orders: [] };
  }
  const payload = { headers: { Authorization: token } };
  const url = `${baseUrl}/api/orders`;
  const response = await axios.get(url, payload);
  return response.data;
};

const mapStateToProps = state => ({
  user: state.authentication.user
});

export default connect(mapStateToProps)(Account);
