import React from 'react';
import { Box, SimpleGrid, Image } from '@chakra-ui/react';
import { SRLWrapper } from 'simple-react-lightbox';
import Layout from '../components/Layout';
import Testimonials from '../components/Testimonials';
import Intro from '../components/Intro';

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
      <Layout padding={0} title='Home'>
        <Box px={{ base: 4, md: 20 }}>
          <Intro />
        </Box>

        <Box mt={{ base: 16, md: 20 }} px={{ base: 4, md: 20 }}>
          <SRLWrapper options={options}>
            {allImages?.length > 0 && (
              <SimpleGrid
                mt={2}
                // flexWrap="wrap"
                w='100%'
                columns={{ base: 2, md: 2, lg: 3 }}
                spacing={{ base: 1, md: 4 }}
              >
                {allImages?.map((image) => {
                  return (
                    <Box
                      key={image.public_id}
                      // w={{ base: "100%", md: "49%" }}
                      // mb={6}
                      // borderWidth="1px"
                      // borderColor="primary.50"
                      bg='primary.100'
                      cursor='pointer'
                    >
                      <Image
                        src={`https://res.cloudinary.com/folasewa/image/upload/${image.public_id}`}
                        height={{ base: '170px', md: '400px' }}
                        objectFit='cover'
                        w='100%'
                      />
                    </Box>
                  );
                })}
              </SimpleGrid>
            )}
          </SRLWrapper>
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
      'https://res.cloudinary.com/folasewa/image/list/home.json'
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
