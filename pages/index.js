import React from "react";

// components
import Layout from "../components/Layout";
import EmblaCarousel from "../components/EmblaCarousel";

const Home = ({ allImages }) => {
  return (
    <div>
      <Layout padding={0} title="Home">
        <EmblaCarousel allImages={allImages} />
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
    };
  } catch (error) {
    return {
      props: {
        allImages: [],
      },
    };
  }
};
