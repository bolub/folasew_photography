import Head from 'next/head';

// Chakra
import { Box } from '@chakra-ui/react';

// Components
import Header from './Header';
import Navbar from '../UI/Navbar';

const Layout = ({
  children,
  title,
  getSingleImage,
  padding = { base: 4, md: 32 },
  withHeader = false,
}) => {
  return (
    <>
      <Head>
        <title>{title} &bull; Folasewa Photography</title>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon_io/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon_io/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon_io/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicon_io/site.webmanifest' />
      </Head>

      <Box
        style={{
          scrollBehavior: 'smooth',
          minHeight: '100vh',
        }}
      >
        <Navbar />

        {withHeader && <Header getSingleImage={getSingleImage} />}

        <main>
          <Box px={padding}>{children}</Box>
        </main>
      </Box>
    </>
  );
};

export default Layout;
