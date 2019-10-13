import {
  Menu,
  Container,
  Button,
  Responsive,
  Segment
} from "semantic-ui-react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import { handleLogout } from "../../utils/auth";
import MobileContainer from "./HamburgerMenu";

import "./Layout.css";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function Header({ user }) {
  const router = useRouter();
  const isRoot = user && user.role === "root";
  const isAdmin = user && user.role === "admin";
  const isRootOrAdmin = isRoot || isAdmin;

  function isActive(route) {
    return route === router.pathname;
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
          <Responsive as={Segment} minWidth={768} style={{ padding: "1em 0" }}>
            <Menu.Menu position="right">
              <Link href="/home">
                <Menu.Item header active={isActive("/home")}>
                  Home
                </Menu.Item>
              </Link>

              <Link href="/menu">
                <Menu.Item header active={isActive("/menu")}>
                  Menu
                </Menu.Item>
              </Link>

              <Link href="/cart">
                <Menu.Item header active={isActive("/cart")}>
                  Cart
                </Menu.Item>
              </Link>

              {isRootOrAdmin && (
                <Link href="/create">
                  <Menu.Item header active={isActive("/create")}>
                    Create
                  </Menu.Item>
                </Link>
              )}

              {user ? (
                <>
                  <Link href="/account">
                    <Menu.Item header active={isActive("/account")}>
                      Account
                    </Menu.Item>
                  </Link>

                  <Menu.Item header>
                    <Button positive onClick={handleLogout}>
                      Logout
                    </Button>
                  </Menu.Item>
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
            </Menu.Menu>
          </Responsive>
          <Responsive as={Segment} maxWidth={768} style={{ padding: 0 }}>
            <MobileContainer />
          </Responsive>
        </Segment.Group>
      </Container>
    </Menu>
  );
}

export default Header;
