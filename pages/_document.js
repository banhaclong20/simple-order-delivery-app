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
          <link rel="stylesheet" type="text/css" href="/static/styles.css" />
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
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

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
