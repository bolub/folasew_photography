import "../styles/globals.css";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "../chakra/theme";

import SimpleReactLightbox from "simple-react-lightbox";

// lazy load blur css
import "react-lazy-load-image-component/src/effects/blur.css";
import "./../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SimpleReactLightbox>
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SimpleReactLightbox>
  );
}

export default MyApp;
