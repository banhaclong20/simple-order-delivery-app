import Head from "next/head";
import Header from "./Header";
import HeadContent from "./HeadContent";
import Footer from "./Footer";

function Layout({ children, user }) {
  return (
    <>
      <Head>
        <HeadContent />
        {/* Stylesheets */}
        <link rel="stylesheet" type="text/css" href="/static/styles.css" />
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700,700i,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,500i,600,600i,700,800&display=swap"
          rel="stylesheet"
        />
        <title>
          Mr. Banh Mi - Order Delivery or CarryOut Vietnamese Sandwiches
        </title>
      </Head>
      <Header user={user} />
      <div style={{ minHeight: "70vh" }}>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
