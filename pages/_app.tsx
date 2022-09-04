import "~/styles/globals.css";
import "@fontsource/lexend/400.css";
import "@fontsource/lexend/600.css";
import "@fontsource/lexend/700.css";

import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

import theme from "~/styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress options={{ showSpinner: false }} />

      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
