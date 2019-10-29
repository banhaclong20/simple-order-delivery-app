import Head from "next/head";
import Header from "./Header";
import HeadContent from "./HeadContent";
import Footer from "./Footer";

function Layout({ children, user }) {
  return (
    <>
      <Head>
        <HeadContent />
        <title>
          Mr. Banh Mi - Delivery and Carryout for Vietnamese Sandwiches
        </title>
      </Head>
      <Header user={user} />
      <div style={{ minHeight: "70vh" }}>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
