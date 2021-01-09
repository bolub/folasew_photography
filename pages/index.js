import React from "react";

// chakra
import { Flex, Center, Text, Box } from "@chakra-ui/react";

import { LazyLoadImage } from "react-lazy-load-image-component";

// components
import Layout from "../components/Layout";
import { BeatLoader } from "react-spinners";
import Empty from "../components/UI/Empty";

const Home = () => {
  const [allImages, setAllImages] = React.useState();
  const [loading, setLoading] = React.useState(false);

  // const { colorMode } = useColorMode();

  const getAllImages = () => {
    setLoading(true);
    setAllImages([]);
    fetch("https://res.cloudinary.com/bolub/image/list/home.json ")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setAllImages(data?.resources);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        return null;
      });
  };

  const getSingleImage = (category) => {
    setLoading(true);
    setAllImages([]);
    fetch(`https://res.cloudinary.com/bolub/image/list/${category}.json`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setAllImages(data?.resources);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        return null;
      });
  };

  React.useEffect(() => {
    getAllImages();
  }, []);

  console.log(allImages);

  return (
    <div>
      <Layout title="Home" getSingleImage={getSingleImage}>
        <Flex justifyContent="space-between" mt={3} flexWrap="wrap" w="100%">
          {loading && (
            <Center minH="60vh" w="100%">
              <BeatLoader color="#A47828" />
            </Center>
          )}

          {!loading &&
            allImages?.length > 0 &&
            allImages?.map((image) => {
              return (
                <LazyLoadImage
                  key={image.public_id}
                  effect="blur"
                  src={`https://res.cloudinary.com/bolub/image/upload/${image.public_id}`}
                  style={{
                    objectFit: "cover",
                    height: "466px",
                    display: "inline !important",
                    width: "100%",
                    borderRadius: "4px",
                    zIndex: 1,
                    border: "border: 1px solid #F2F2F2;",
                  }}
                />
              );
            })}

          {!loading && allImages?.length === 0 && (
            <Center flexDir="column" textAlign="center" minH="60vh" w="100%">
              <Box mx="auto" w="300px">
                <Empty />
              </Box>
              <Text mt={6}>No Images Available for this category</Text>
            </Center>
          )}
        </Flex>
      </Layout>
    </div>
  );
};

export default Home;
