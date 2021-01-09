import React from "react";

// chakra
import { Box, Flex, Image, Center } from "@chakra-ui/react";

// componenets
import Layout from "../components/Layout";
import { BeatLoader } from "react-spinners";

const Home = () => {
  const [allImages, setAllImages] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const getAllImages = () => {
    setLoading(true);
    fetch("http://res.cloudinary.com/bolub/image/list/home.json ")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setAllImages(data?.resources);
      });
  };

  const getSingleImage = (category) => {
    setLoading(true);
    fetch(`http://res.cloudinary.com/bolub/image/list/${category}.json`)
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
            <Center color="brand.primary" minH="60vh" w="100%">
              <BeatLoader />
            </Center>
          )}

          {!loading && allImages?.length > 0 && (
            <>
              {allImages?.map((image) => {
                return (
                  <Image
                    h="466px"
                    objectFit="cover"
                    mb={4}
                    // w="40%"
                    maxW="49%"
                    key={image.public_id}
                    src={`http://res.cloudinary.com/bolub/image/upload/${image.public_id}`}
                  />
                );
              })}
            </>
          )}
        </Flex>
      </Layout>
    </div>
  );
};

export default Home;
