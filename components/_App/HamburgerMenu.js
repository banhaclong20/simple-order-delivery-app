import PropTypes from "prop-types";
import React, { Component } from "react";
import Link from "next/link";
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar
} from "semantic-ui-react";

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <>
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" header>
            Home
          </Menu.Item>
          <Menu.Item as="a" header>
            Work
          </Menu.Item>
          <Menu.Item as="a" header>
            Company
          </Menu.Item>
          <Menu.Item as="a" header>
            Careers
          </Menu.Item>
          <Menu.Item as="a" header>
            Log in
          </Menu.Item>
          <Menu.Item as="a" header>
            Sign Up
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment textAlign="center" vertical>
            <Menu secondary size="large">
              <Menu.Item onClick={this.handleToggle}>
                <Icon name="sidebar" size="large" />
              </Menu.Item>
            </Menu>
          </Segment>

          {children}
        </Sidebar.Pusher>
      </>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

export default MobileContainer;
