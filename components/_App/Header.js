import {
  Menu,
  Container,
  Button,
  Segment,
  Icon,
  Label
} from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { handleLogout } from "../../utils/auth";
import MobileContainer from "./HamburgerMenu";

import "./Layout.css";

function Header({ user }) {
  const router = useRouter();
  let orderCount = 0;

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
          <div style={{ padding: "1em 0" }} className="desktop-menu">
            <Menu.Menu position="right">
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
                    onClick={handleLogout}
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

export default Header;
