// pages/_app.js
import RootLayout from '@/layout/RootLayout';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <RootLayout>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </RootLayout>
    </>
  );
}

export default MyApp;
