import App from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import axios from "axios";
import Router from "next/router";
import { parseCookies, destroyCookie } from "nookies";

import { Transition, animated } from "react-spring/renderprops.cjs";

import { initStore } from "../redux/store";
import { redirectUser } from "../utils/auth";
import baseUrl from "../utils/baseUrl";
import Layout from "../components/_App/Layout";
import "semantic-ui-css/semantic.min.css";
import "./main.css";

export default withRedux(initStore, { debug: true })(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      const { token } = parseCookies(ctx);

      let pageProps = {};

      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }

      if (!token) {
        const isProtectedRoute =
          ctx.pathname === "/account" || ctx.pathname === "/create";
        if (isProtectedRoute) {
          redirectUser(ctx, "/login");
        }
      } else {
        try {
          const payload = { headers: { Authorization: token } };
          const url = `${baseUrl}/api/account`;
          const response = await axios.get(url, payload);
          const user = response.data;
          const isRoot = user.role === "root";
          const isAdmin = user.role === "admin";
          const isNotPermitted =
            !(isRoot || isAdmin) && ctx.pathname === "/create";
          if (isNotPermitted) {
            redirectUser(ctx, "/");
          }
          pageProps.user = user;
        } catch (error) {
          console.error("Error getting current user", error);
          // 1) Throw out invalid token
          destroyCookie(ctx, "token");
          // 2) Redirect to login
          redirectUser(ctx, "/login");
        }
      }

      return { pageProps };
    }

    componentDidMount() {
      window.addEventListener("storage", this.syncLogout);
    }

    syncLogout = event => {
      if (event.key === "logout") {
        console.log("logged out from storage");
        Router.push("/login");
      }
    };

    render() {
      const { pageProps, store } = this.props;

      const transitionItems = [
        {
          id: this.props.router.route,
          Component: this.props.Component,
          pageProps: this.props.pageProps
        }
      ];

      return (
        <Provider store={store}>
          <Layout {...pageProps}>
            <Transition
              native
              unique
              items={transitionItems}
              keys={transitionItems => transitionItems.id}
              from={{ opacity: 0 }}
              enter={{ opacity: 1 }}
              leave={{ opacity: 0 }}
              config={{ duration: 300 }}
            >
              {({ Component, pageProps }) => styles => (
                <animated.div style={styles}>
                  <Component {...pageProps} />
                </animated.div>
              )}
            </Transition>
          </Layout>
        </Provider>
      );
    }
  }
);
