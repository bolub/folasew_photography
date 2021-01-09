import React from "react";

// chakra
import { Flex, Center, useColorMode } from "@chakra-ui/react";

import { LazyLoadImage } from "react-lazy-load-image-component";

// components
import Layout from "../components/Layout";
import { BeatLoader } from "react-spinners";

const Home = () => {
  const [allImages, setAllImages] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const { colorMode } = useColorMode();

  const getAllImages = () => {
    setLoading(true);
    fetch("https://res.cloudinary.com/bolub/image/list/home.json ")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setAllImages(data?.resources);
      });
  };

  const getSingleImage = (category) => {
    setLoading(true);
    fetch(`https://res.cloudinary.com/bolub/image/list/${category}.json`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setAllImages(data?.resources);
      });
  };

  React.useEffect(() => {
    getAllImages();
  }, []);

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
                  }}
                />
              );
            })}
        </Flex>
      </Layout>
    </div>
  );
};

export default Home;
