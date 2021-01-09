import Head from "next/head";

// Chakra
import { Box, useColorMode } from "@chakra-ui/react";

// react reveal
// import Fade from "react-reveal/Fade";

// Components
import Header from "./Header";
import Navbar from "../Navbar";

const Layout = ({ children, title, getSingleImage }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>{title} &bull; Folasewa Photography</title>
        {/* <meta
          name="description"
          content="Web design company located in Lagos. We also provide Branding, Search Engine Optimization, Digital Marketing, UI/UX designs, Mobile app development services."
        />
        <meta name="author" content="@goodnesskay  @sprinble" />
        <meta name="twitter" content="@sprinble" />
        <meta name="instagram" content="@sprinble" />
        <meta name="github" content="@sprinble" />
        <meta name="dribble" content="@sprinble" />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="Full-stack mobile (iOS, Android) and web app design and development company,app developer company, Digital Agency in Kenya, Ghana, Nigeria, United States Of America, Africa, software development company,
        android development company, react native development company, web development company, desktop development company,
        IOS development company, javascript development company, illustration, development agency, design agency, 
        web development agency,  web apps development agency, mobile apps development agency, android development agency, ios development agency, windows development agency, remote development agency, agile development agency, devops development agency, design agency in Africa, design agency in America, design agency in Nigeria, design agency in USA, design agency in Ghana, design agency in Kenya, design agency in South Africa, design agency in Europe, UI/UX design agency, creative design agency, illustration design agency, graphics design agency, branding design agency, digital marketing agency in Ghana, digital marketing agency in Nigeria, digital marketing agency in africa, digital marketing agency in Nigeria, digital marketing agency in America,experiential marketing agency in Nigeria, experiential marketing agency in Africa, experiential marketing agency in America, experiential marketing agency in Kenya, experiential marketing agency in Ghana, content marketing agency in Nigeria, content marketing agency in Africa, content marketing agency in Kenya, content marketing agency in Africa, content marketing agency in United States,Media agencies in Lagos, Digital marketing, SEO Companies in Lagos, Digital Marketing training in Lagos, Digital Marketing companies in Nigeria, Best Web Design Company in Nigeria,Cost of web design in Nigeria, Web design company,Designs for projects,Advertising agencies in Lagos, Designs agencies in Nigeria"
        />
        <meta
          property="og:title"
          content="Sprinble - Masterpiece Web, Mobile, UI/UX Design Digital Agency"
        />
        <meta
          property="og:description"
          content="Web design company located in Lagos. We also provide Branding, SEO, Digital Marketing, UI/UX designs, Mobile app development services"
        />
        <meta property="og:url" content="https://sprinble.com/" />
        <meta property="og:site_name" content="Sprinble" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/sprinble/image/upload/v1572528202/1533640799-25-sprinble.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://res.cloudinary.com/sprinble/image/upload/v1572528202/1533640799-25-sprinble.jpg"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:image"
          content="https://pbs.twimg.com/profile_images/960977374576889857/9kXxLqDx_bigger.jpg"
        />
        <meta name="twitter:creator" content="@goodnesskay" />
        <meta
          name="twitter:description"
          content="Web design company located in Lagos. We also provide Branding, SEO, Digital Marketing, UI/UX designs, Mobile app development services."
        />
        <meta
          name="twitter:title"
          content="Sprinble - Masterpiece Web, Mobile, UI/UX Design Digital Agency"
        /> */}
      </Head>

      <body
        style={{
          scrollBehavior: "smooth",
          backgroundColor: colorMode === "light" ? "white" : "#333333",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <Header getSingleImage={getSingleImage} />

        <main>
          <Box px={{ base: 4, md: 32 }}>{children}</Box>
        </main>
      </body>

      {/* Footer */}
      {/* <Fade bottom> */}
      {/* <footer>Hello from botter</footer> */}
      {/* </Fade> */}
    </>
  );
};

export default Layout;
