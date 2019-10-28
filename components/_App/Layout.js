import Head from "next/head";
import Header from "./Header";
import HeadContent from "./HeadContent";
import Footer from "./Footer";

function Layout({ children, user }) {
  return (
    <>
      <Head>
        <HeadContent />
      </Head>
      <Header user={user} />
      <div style={{ minHeight: "70vh" }}>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
