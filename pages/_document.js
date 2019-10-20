import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps
    };
  }

  render() {
    return (
      <html>
        <Head>
          <style>{`
            // body {
            //   position: absolute;
            //   top: 0;
            // }
          `}</style>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
