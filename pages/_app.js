import "../styles/globals.css";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "../chakra/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
