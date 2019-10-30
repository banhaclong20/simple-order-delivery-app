import {
  Menu,
  Container,
  Button,
  Segment,
  Icon,
  Label,
  Header as MenuHeader
} from "semantic-ui-react";
import { connect } from "react-redux";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import AuthActions from "../../redux/actions/authActions";
import OrderActions from "../../redux/actions/orderActions";
import { handleLogout } from "../../utils/auth";
import MobileContainer from "./HamburgerMenu";

import "./Layout.css";

function Header({ logOut, user, orderType, selectedAddress, resetOrder }) {
  const router = useRouter();
  let orderCount = 0;

  function isActive(route) {
    return route === router.pathname;
  }

  function handleLogoutAuth() {
    handleLogout();
    logOut();
  }

  function handleChangeOrder() {
    resetOrder();
    Router.push("/start-order");
  }

  return (
    <Menu
      secondary
      style={{
        margin: 0,
        height: 100,
        boxShadow: "0 1px 10px rgba(78, 82, 99, 0.15)"
      }}
    >
      <Container>
        <Link href="/">
          <Menu.Item header active={isActive("/")}>
            <img
              className="mrbanhmi-logo"
              src="../../static/logo-mrbanhmi.png"
            />
          </Menu.Item>
        </Link>
        <Segment.Group className="segment-menu">
          <div style={{ padding: "1em 0" }} className="desktop-menu">
            <Menu.Menu position="right">
              {orderType != undefined && selectedAddress ? (
                <Segment basic className="info-order-header">
                  <MenuHeader as="h4">{orderType}</MenuHeader>
                  <p>
                    <span>
                      <Icon name="map marker alternate" />
                    </span>{" "}
                    9370 Warren Parkway
                  </p>
                  <p className="button-change" onClick={handleChangeOrder}>
                    Change
                  </p>
                </Segment>
              ) : null}

              <Link href="/">
                <Menu.Item header active={isActive("/")}>
                  Home
                </Menu.Item>
              </Link>

              <Link href="/menu">
                <Menu.Item header active={isActive("/menu")}>
                  Menu
                </Menu.Item>
              </Link>

              {user ? (
                <>
                  <Menu.Item
                    header
                    onClick={handleLogoutAuth}
                    style={{ marginRight: 15 }}
                  >
                    Logout
                  </Menu.Item>

                  <Link href="/account">
                    <Button positive>Account</Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Menu.Item header>Login</Menu.Item>
                  </Link>

                  <Link href="/signup">
                    <Menu.Item header active={isActive("/signup")}>
                      <Button inverted color="green">
                        Join Now
                      </Button>
                    </Menu.Item>
                  </Link>
                </>
              )}

              <Link href="/cart">
                <Menu.Item header active={isActive("/cart")}>
                  <Icon name="cart" />
                  {orderCount === 0 ? null : (
                    <Label color="green" floating>
                      0
                    </Label>
                  )}
                </Menu.Item>
              </Link>
            </Menu.Menu>
          </div>
          <div className="mobile-menu" style={{ padding: 0 }}>
            <MobileContainer user={user} />
          </div>
        </Segment.Group>
      </Container>
    </Menu>
  );
}

const mapStateToProps = state => ({
  token: state.authentication.token,
  user: state.authentication.user,
  orderType: state.order.orderType,
  selectedAddress: state.order.selectedAddress
});

const mapDispatchToProps = {
  logOut: AuthActions.logOut,
  resetOrder: OrderActions.resetOrder
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
