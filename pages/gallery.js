import React from "react";
import { useRouter } from "next/router";

// chakra
import { Center, Text, Box, Image, SimpleGrid } from "@chakra-ui/react";

// import { LazyLoadImage } from "react-lazy-load-image-component";

// lightbox
import { SRLWrapper } from "simple-react-lightbox";

// components
import Layout from "../components/Layout";
import { BeatLoader } from "react-spinners";
import { EmptyV2 } from "../components/UI/Icons/Empty";
import { getItem } from "../helpers/localStorage";
// import Whatsapp from "../components/UI/Icons/Whatsapp";

const Home = () => {
  const [allImages, setAllImages] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();
  const { category } = router.query;
  // const { colorMode } = useColorMode();

  // const getAllImages = () => {
  //   setLoading(true);
  //   setAllImages([]);
  //   fetch("https://res.cloudinary.com/folasewa/image/list/home.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setLoading(false);
  //       setAllImages(data?.resources);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       setLoading(false);
  //       return null;
  //     });
  // };

  const getSingleImage = (category) => {
    setLoading(true);
    setAllImages([]);
    fetch(`https://res.cloudinary.com/folasewa/image/list/${category}.json`)
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
    getSingleImage(category || getItem("category"));
  }, []);

  //
  // const share = (link) => {
  //   if (typeof window !== "undefined") {
  //     window.open(link);
  //   }
  // };

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
      <Layout withHeader title="Home" getSingleImage={getSingleImage}>
        <SRLWrapper options={options}>
          {loading && (
            <Center minH="60vh" w="100%">
              <BeatLoader color="#A47828" />
            </Center>
          )}
          {!loading && allImages?.length === 0 && (
            <Center flexDir="column" textAlign="center" minH="60vh" w="100%">
              <Box mx="auto" w={{ md: "400px" }} height="290px">
                <EmptyV2 />
              </Box>
              <Text mt={6}>Something's cooking...</Text>
            </Center>
          )}

          {!loading && allImages?.length > 0 && (
            <SimpleGrid
              // flexDir={{ base: "column", md: "row" }}
              // justifyContent="space-between"
              mt={2}
              mb={12}
              // flexWrap="wrap"
              w="100%"
              columns={{ base: 2, md: 2, lg: 3 }}
              spacing={{ base: 1, md: 4 }}
            >
              {allImages?.map((image) => {
                const category = image.public_id
                  .replace("folashewa_photography/", "")
                  .split("/")[0];

                return (
                  <Box
                    key={image.public_id}
                    // w={{ base: "100%", md: "49%" }}
                    // mb={6}
                    // borderWidth="1px"
                    // borderColor="primary.50"
                    bg="primary.100"
                    cursor="pointer"
                  >
                    {/* // <LazyLoadImage
                //   key={image.public_id}
                //   effect="blur"
                //   src={`https://res.cloudinary.com/folasewa/image/upload/${image.public_id}`}
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
                      src={`https://res.cloudinary.com/folasewa/image/upload/${image.public_id}`}
                      h={{ base: "auto", md: "426px" }}
                      objectFit="cover"
                      // borderRadius="4px"
                      // borderWidth="1px"
                      w="100%"
                    />
                  </Box>
                );
              })}
            </SimpleGrid>
          )}
        </SRLWrapper>
      </Layout>
    </div>
  );
};

export default Home;
