import React from "react";

import { Box, SimpleGrid, Image } from "@chakra-ui/react";

// lightbox
import { SRLWrapper } from "simple-react-lightbox";

// components
import Layout from "../components/Layout";
// import EmblaCarousel from "../components/EmblaCarousel";
import Testimonials from "../components/Testimonials";
import Intro from "../components/Intro";

const Home = ({ allImages }) => {
  const options = {
    // settings: {
    //   overlayColor: "rgb(25, 136, 124)",
    //   autoplaySpeed: 1500,
    //   transitionSpeed: 900,
    // },
    buttons: {
      showAutoplayButton: false,
      showDownloadButton: false,
      showThumbnailsButton: false,
    },
    // caption: {
    //   captionColor: "#a6cfa5",
    //   captionFontFamily: "nunito, sans-serif",
    //   captionFontWeight: "300",
    //   captionTextTransform: "uppercase",
    // },
  };

  return (
    <div>
      <Layout padding={0} title="Home">
        {/* <EmblaCarousel allImages={allImages} /> */}

        {/* Introduction */}
        <Box px={{ base: 6, md: 20 }}>
          <Intro />
        </Box>

        {/* gallert */}
        <Box mt={20} px={{ base: 6, md: 20 }}>
          <SRLWrapper options={options}>
            {allImages?.length > 0 && (
              <SimpleGrid
                // flexDir={{ base: "column", md: "row" }}
                // justifyContent="space-between"
                mt={2}
                // flexWrap="wrap"
                w="100%"
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={4}
              >
                {allImages?.map((image) => {
                  return (
                    <Box
                      key={image.public_id}
                      // w={{ base: "100%", md: "49%" }}
                      // mb={6}
                      borderWidth="1px"
                      borderColor="primary.50"
                      bg="primary.100"
                      cursor="pointer"
                    >
                      <Image
                        src={`https://res.cloudinary.com/folasewa/image/upload/${image.public_id}`}
                        height={{ base: "350px", md: "400px" }}
                        objectFit="cover"
                        w="100%"
                      />
                    </Box>
                  );
                })}
              </SimpleGrid>
            )}
          </SRLWrapper>
        </Box>

        {/* <Box px={{ base: 8, md: 12 }}>
          <Intro />
        </Box> */}
        <Box>
          <Testimonials />
        </Box>
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
