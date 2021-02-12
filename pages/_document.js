import { ColorModeScript } from "@chakra-ui/react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { customTheme } from "../chakra/theme";

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
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body style={{ scrollBehavior: "smooth" }}>
          <ColorModeScript
            initialColorMode={customTheme.colorModeConfig.initialColorMode}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
