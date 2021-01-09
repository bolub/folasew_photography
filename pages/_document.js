import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800;900&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;0,900;1,400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body style={{ scrollBehavior: "smooth" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
