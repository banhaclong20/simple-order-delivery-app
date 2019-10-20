import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import MenuItem from "../Layout/Menu/MenuItem";
import { handleLogout } from "../../utils/auth";

function MobileContainer({ user, children }) {
  const [sidebarOpened, setSidebarOpen] = React.useState(false);
  const router = useRouter();

  function isActive(route) {
    return route === router.pathname;
  }

  function handleSidebarHide() {
    setSidebarOpen(false);
  }

  function handleToggle() {
    setSidebarOpen(true);
  }

  return (
    <>
      <Sidebar
        as={Menu}
        animation="overlay"
        inverted
        onHide={handleSidebarHide}
        vertical
        visible={sidebarOpened}
        onHide={() => setSidebarOpen(false)}
        className="hamburger-menu"
      >
        <Menu.Menu>
          <MenuItem handleToggle={handleSidebarHide} />
          {user ? (
            <>
              <Link href="/account">
                <Menu.Item
                  header
                  active={isActive("/account")}
                  onClick={handleSidebarHide}
                >
                  Account
                </Menu.Item>
              </Link>

              <Menu.Item
                header
                onClick={() => {
                  handleLogout();
                  handleSidebarHide();
                }}
              >
                <Button positive>Logout</Button>
              </Menu.Item>
            </>
          ) : (
            <>
              <Link href="/login">
                <Menu.Item header onClick={handleSidebarHide}>
                  Login
                </Menu.Item>
              </Link>

              <Link href="/signup">
                <Menu.Item
                  header
                  active={isActive("/signup")}
                  onClick={handleSidebarHide}
                >
                  <Button inverted color="green">
                    Join Now
                  </Button>
                </Menu.Item>
              </Link>
            </>
          )}
        </Menu.Menu>
      </Sidebar>

      <Sidebar.Pusher>
        <Segment textAlign="center" vertical>
          {sidebarOpened ? (
            <Menu.Item onClick={() => setSidebarOpen(false)}>
              <Icon name="window close outline" size="large" />
            </Menu.Item>
          ) : (
            <Menu.Item onClick={handleToggle}>
              <Icon name="sidebar" size="large" />
            </Menu.Item>
          )}
        </Segment>

        {children}
      </Sidebar.Pusher>
    </>
  );
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

export default MobileContainer;
