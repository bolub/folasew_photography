import React from "react";

// chakra
import { Flex, Center, Text, Box, Image, HStack } from "@chakra-ui/react";

// import { LazyLoadImage } from "react-lazy-load-image-component";

// lightbox
import { SRLWrapper } from "simple-react-lightbox";

// components
import Layout from "../components/Layout";
import { BeatLoader } from "react-spinners";
import { EmptyV2 } from "../components/UI/Empty";

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

  return (
    <div>
      <Layout title="Home" getSingleImage={getSingleImage}>
        <SRLWrapper>
          <Flex
            flexDir={{ base: "column", md: "row" }}
            justifyContent="space-between"
            mt={3}
            flexWrap="wrap"
            w="100%"
          >
            {loading && (
              <Center minH="60vh" w="100%">
                <BeatLoader color="#A47828" />
              </Center>
            )}

            {!loading &&
              allImages?.length > 0 &&
              allImages?.map((image) => {
                const category = image.public_id
                  .replace("folashewa_photography/", "")
                  .split("/")[0];

                return (
                  <Box
                    key={image.public_id}
                    w={{ base: "100%", md: "49%" }}
                    mb={10}
                    cursor="pointer"
                  >
                    {/* // <LazyLoadImage
                //   key={image.public_id}
                //   effect="blur"
                //   src={`https://res.cloudinary.com/bolub/image/upload/${image.public_id}`}
                //   style={{
                //     objectFit: "cover",
                //     height: "466px",
                //     display: "inline !important",
                //     width: "100%",
                //     borderRadius: "4px",
                //     zIndex: 1,
                //     border: "border: 1px solid #F2F2F2;",
                //   }}
                // /> */}
                    <Image
                      src={`https://res.cloudinary.com/bolub/image/upload/${image.public_id}`}
                      h={{ base: "300px", md: "426px" }}
                      objectFit="cover"
                      borderRadius="4px"
                      borderWidth="1px"
                      w="100%"
                    />

                    <HStack mt={4}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.83333 5.83333H5.84167M5.83333 2.5H10C10.4267 2.5 10.8533 2.6625 11.1783 2.98833L17.0117 8.82167C17.3241 9.13421 17.4996 9.55806 17.4996 10C17.4996 10.4419 17.3241 10.8658 17.0117 11.1783L11.1783 17.0117C10.8658 17.3241 10.4419 17.4996 10 17.4996C9.55806 17.4996 9.13421 17.3241 8.82167 17.0117L2.98833 11.1783C2.83334 11.0238 2.71041 10.8401 2.6266 10.6379C2.5428 10.4357 2.49977 10.2189 2.5 10V5.83333C2.5 4.94928 2.85119 4.10143 3.47631 3.47631C4.10143 2.85119 4.94928 2.5 5.83333 2.5Z"
                          stroke="#A47828"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokelinejoin="round"
                        />
                      </svg>

                      <Text
                        fontSize={{ base: "xs", md: "sm" }}
                        textTransform="uppercase"
                        fontWeight={900}
                        color="brand.primary"
                      >
                        {category}
                      </Text>
                    </HStack>
                  </Box>
                );
              })}

            {!loading && allImages?.length === 0 && (
              <Center flexDir="column" textAlign="center" minH="60vh" w="100%">
                <Box mx="auto" maxW="400px">
                  <EmptyV2 />
                </Box>
                <Text mt={6}>Something's cooking...</Text>
              </Center>
            )}
          </Flex>
        </SRLWrapper>
      </Layout>
    </div>
  );
};

export default Home;
