import React from "react";

import { Box } from "@chakra-ui/react";

// components
import Layout from "../components/Layout";
import EmblaCarousel from "../components/EmblaCarousel";
import Testimonials from "../components/Testimonials";
import Intro from "../components/Intro";

const Home = ({ allImages }) => {
  return (
    <div>
      <Layout padding={0} title="Home">
        <EmblaCarousel allImages={allImages} />

        <Box px={{ base: 8, md: 12 }}>
          <Intro />
        </Box>
        <Testimonials />
      </Layout>
    </div>
  );
};

export default Home;

export const getStaticProps = async (context) => {
  try {
    const response = await fetch(
      "https://res.cloudinary.com/folasewa/image/list/home.json"
    ).then((response) => response.json());

    return {
      props: {
        allImages: response.resources,
      },
      revalidate: 1,
    };
  } catch (error) {
    return {
      props: {
        allImages: [],
      },
    };
  }
};
