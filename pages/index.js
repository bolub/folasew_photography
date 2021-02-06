import React from "react";

// chakra
import {
  Flex,
  Center,
  Text,
  Box,
  Image,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useColorMode,
} from "@chakra-ui/react";

// import { LazyLoadImage } from "react-lazy-load-image-component";

// lightbox
import { SRLWrapper } from "simple-react-lightbox";

// components
import Layout from "../components/Layout";
import { BeatLoader } from "react-spinners";
import { EmptyV2 } from "../components/UI/Icons/Empty";
// import Whatsapp from "../components/UI/Icons/Whatsapp";

const Home = () => {
  const [allImages, setAllImages] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const { colorMode } = useColorMode();

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

  //
  const share = (link) => {
    if (typeof window !== "undefined") {
      window.open(link);
    }
  };

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
      <Layout title="Home" getSingleImage={getSingleImage}>
        <SRLWrapper options={options}>
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
                <Box mx="auto" w={{ md: "400px" }} height="290px">
                  <EmptyV2 />
                </Box>
                <Text mt={6}>Something's cooking...</Text>
              </Center>
            )}
          </Flex>
        </SRLWrapper>

        {/* <IconButton
          pos="fixed"
          bottom={8}
          right={6}
          aria-label="whatsapp"
          borderRadius="full"
          bg="brand.primary"
          color=""
          icon={}
          size="lg"
        /> */}
        {/* <Box
          cursor="pointer"
          pos="fixed"
          bottom={{ base: 2, md: 6 }}
          right={{ base: 4, md: 6 }}
          onClick={() => {
            share(
              `https://api.whatsapp.com/send/?phone=2348053667690&text=Hello there, I’d like to making enquiries about&app_absent=0`
            );
          }}
        >
          <Whatsapp />
        </Box> */}
        <Menu autoSelect={false}>
          <MenuButton
            as={Button}
            cursor="pointer"
            pos="fixed"
            bottom={{ base: 2, md: 6 }}
            right={{ base: 4, md: 6 }}
            colorScheme="primary"
            bg="brand.primary"
            borderRadius="full"
            w="60px"
            h="60px"
          >
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </MenuButton>

          <MenuList bg={colorMode === "light" ? "white" : "#333333"}>
            {/* whatsapp */}
            <MenuItem
              mt={3}
              mb={1}
              d="flex"
              onClick={() => {
                share(
                  `https://api.whatsapp.com/send/?phone=2348053667690&text=Hello there, I’d like to making enquiries about&app_absent=0`
                );
              }}
              cursor="pointer"
            >
              <Text as="span" color="brand.primary">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30.9888 46.6906H30.9815C27.9959 46.6896 25.0623 45.9405 22.4567 44.5193L13 47L15.5308 37.7561C13.9697 35.0506 13.1482 31.9819 13.1496 28.8378C13.1535 19.0021 21.156 11 30.9887 11C35.7608 11.0021 40.2398 12.8598 43.6078 16.2318C46.9757 19.6035 48.8296 24.0854 48.8277 28.8519C48.8237 38.6853 40.8244 46.6866 30.9888 46.6906ZM22.8947 41.2899L23.4362 41.6112C25.7126 42.9621 28.3221 43.6769 30.9827 43.6779H30.9887C39.161 43.6779 45.8123 37.0264 45.8156 28.8509C45.8171 24.889 44.2764 21.1639 41.477 18.3613C38.6776 15.5586 34.9549 14.0144 30.9946 14.0131C22.8161 14.0131 16.1646 20.6639 16.1614 28.8389C16.1602 31.6405 16.9441 34.3689 18.4283 36.7296L18.7809 37.2905L17.283 42.7619L22.8947 41.2899ZM39.9759 33.0939C39.8645 32.908 39.5674 32.7964 39.1217 32.5732C38.6759 32.3501 36.4845 31.2719 36.0758 31.123C35.6674 30.9744 35.3701 30.9001 35.073 31.3461C34.7759 31.7923 33.9217 32.7964 33.6616 33.0939C33.4016 33.3913 33.1416 33.4286 32.696 33.2054C32.2503 32.9823 30.814 32.5117 29.1115 30.9931C27.7864 29.8111 26.8918 28.3515 26.6318 27.9053C26.3718 27.459 26.6041 27.2179 26.8272 26.9956C27.0278 26.7958 27.273 26.4749 27.4959 26.2147C27.7187 25.9545 27.793 25.7684 27.9416 25.4712C28.0901 25.1736 28.0159 24.9134 27.9044 24.6902C27.793 24.4671 26.9016 22.2731 26.5301 21.3806C26.1683 20.5114 25.8009 20.6292 25.5273 20.6155C25.2676 20.6024 24.9701 20.5997 24.673 20.5997C24.3758 20.5997 23.8929 20.7112 23.4844 21.1575C23.0758 21.6037 21.9243 22.6821 21.9243 24.8759C21.9243 27.0699 23.5215 29.1895 23.7444 29.4869C23.9672 29.7845 26.8874 34.2866 31.3588 36.2173C32.4223 36.6766 33.2525 36.9509 33.8999 37.1563C34.9676 37.4956 35.9394 37.4477 36.7073 37.3329C37.5637 37.205 39.3444 36.2547 39.716 35.2135C40.0873 34.1722 40.0873 33.2797 39.9759 33.0939Z"
                    fill="#FDFDFD"
                  />
                </svg>
              </Text>

              <Text ml={2} fontSize="15px" fontWeight={600}>
                +2348053667690
              </Text>
            </MenuItem>

            {/* Instagram */}
            <MenuItem
              mb={1}
              d="flex"
              onClick={() => {
                share(`https://www.instagram.com/folasewailori`);
              }}
              cursor="pointer"
            >
              <Text as="span" color="brand.primary">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                    fill="currentColor"
                  />
                  <mask
                    id="mask0"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="48"
                    height="48"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                      fill="currentColor"
                    />
                  </mask>
                  <g mask="url(#mask0)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24.0012 11.2C20.5249 11.2 20.0886 11.2152 18.7233 11.2773C17.3606 11.3397 16.4305 11.5554 15.6166 11.872C14.7747 12.1989 14.0606 12.6362 13.3491 13.348C12.6371 14.0594 12.1997 14.7736 11.8717 15.6152C11.5544 16.4293 11.3384 17.3597 11.2771 18.7219C11.216 20.0872 11.2 20.5238 11.2 24.0001C11.2 27.4764 11.2155 27.9113 11.2773 29.2767C11.34 30.6394 11.5557 31.5695 11.872 32.3834C12.1992 33.2252 12.6365 33.9394 13.3483 34.6509C14.0595 35.3629 14.7736 35.8013 15.615 36.1282C16.4294 36.4447 17.3598 36.6605 18.7222 36.7229C20.0876 36.785 20.5236 36.8002 23.9996 36.8002C27.4762 36.8002 27.9111 36.785 29.2765 36.7229C30.6391 36.6605 31.5703 36.4447 32.3848 36.1282C33.2264 35.8013 33.9394 35.3629 34.6506 34.6509C35.3626 33.9394 35.8 33.2252 36.128 32.3836C36.4427 31.5695 36.6587 30.6391 36.7227 29.2769C36.784 27.9116 36.8 27.4764 36.8 24.0001C36.8 20.5238 36.784 20.0875 36.7227 18.7222C36.6587 17.3595 36.4427 16.4293 36.128 15.6155C35.8 14.7736 35.3626 14.0594 34.6506 13.348C33.9386 12.636 33.2266 12.1986 32.384 11.872C31.5679 11.5554 30.6373 11.3397 29.2746 11.2773C27.9092 11.2152 27.4746 11.2 23.9972 11.2H24.0012ZM23.5743 13.5065H23.5746L24.0012 13.5066C27.4188 13.5066 27.8239 13.5189 29.1735 13.5802C30.4215 13.6373 31.0989 13.8458 31.5501 14.021C32.1474 14.253 32.5733 14.5304 33.021 14.9784C33.469 15.4264 33.7464 15.8531 33.9789 16.4504C34.1541 16.9011 34.3629 17.5784 34.4197 18.8264C34.481 20.1758 34.4944 20.5811 34.4944 23.9972C34.4944 27.4132 34.481 27.8185 34.4197 29.1679C34.3626 30.4159 34.1541 31.0932 33.9789 31.5439C33.7469 32.1412 33.469 32.5666 33.021 33.0143C32.573 33.4623 32.1477 33.7397 31.5501 33.9717C31.0994 34.1477 30.4215 34.3557 29.1735 34.4127C27.8242 34.4741 27.4188 34.4874 24.0012 34.4874C20.5833 34.4874 20.1782 34.4741 18.8289 34.4127C17.5809 34.3551 16.9035 34.1466 16.4521 33.9714C15.8547 33.7394 15.428 33.462 14.98 33.014C14.532 32.566 14.2547 32.1404 14.0222 31.5428C13.847 31.0922 13.6382 30.4148 13.5814 29.1668C13.52 27.8175 13.5078 27.4121 13.5078 23.994C13.5078 20.5758 13.52 20.1726 13.5814 18.8232C13.6384 17.5752 13.847 16.8979 14.0222 16.4467C14.2542 15.8493 14.532 15.4227 14.98 14.9747C15.428 14.5267 15.8547 14.2493 16.4521 14.0168C16.9033 13.8408 17.5809 13.6328 18.8289 13.5754C20.0097 13.5221 20.4673 13.5061 22.8529 13.5034V13.5066C23.0758 13.5063 23.3156 13.5064 23.5743 13.5065ZM29.2978 17.1675C29.2978 16.3192 29.9858 15.632 30.8338 15.632V15.6315C31.6818 15.6315 32.3698 16.3195 32.3698 17.1675C32.3698 18.0155 31.6818 18.7035 30.8338 18.7035C29.9858 18.7035 29.2978 18.0155 29.2978 17.1675ZM24.0009 17.4267C20.3709 17.4268 17.4278 20.37 17.4278 24.0001C17.4278 27.6303 20.371 30.5722 24.0012 30.5722C27.6314 30.5722 30.5735 27.6303 30.5735 24.0001C30.5735 20.3699 27.6311 17.4267 24.0009 17.4267ZM28.2679 24.0001C28.2679 21.6435 26.3575 19.7334 24.0012 19.7334C21.6446 19.7334 19.7345 21.6435 19.7345 24.0001C19.7345 26.3564 21.6446 28.2668 24.0012 28.2668C26.3575 28.2668 28.2679 26.3564 28.2679 24.0001Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </Text>

              <Text ml={2} fontSize="15px" fontWeight={600}>
                @folasewailori
              </Text>
            </MenuItem>

            {/* Instagram again(weddings) */}
            <MenuItem
              mb={1}
              d="flex"
              onClick={() => {
                share(`https://www.instagram.com/folasewailoriweddings/`);
              }}
              cursor="pointer"
            >
              <Text as="span" color="brand.primary">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                    fill="currentColor"
                  />
                  <mask
                    id="mask0"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="48"
                    height="48"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                      fill="currentColor"
                    />
                  </mask>
                  <g mask="url(#mask0)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24.0012 11.2C20.5249 11.2 20.0886 11.2152 18.7233 11.2773C17.3606 11.3397 16.4305 11.5554 15.6166 11.872C14.7747 12.1989 14.0606 12.6362 13.3491 13.348C12.6371 14.0594 12.1997 14.7736 11.8717 15.6152C11.5544 16.4293 11.3384 17.3597 11.2771 18.7219C11.216 20.0872 11.2 20.5238 11.2 24.0001C11.2 27.4764 11.2155 27.9113 11.2773 29.2767C11.34 30.6394 11.5557 31.5695 11.872 32.3834C12.1992 33.2252 12.6365 33.9394 13.3483 34.6509C14.0595 35.3629 14.7736 35.8013 15.615 36.1282C16.4294 36.4447 17.3598 36.6605 18.7222 36.7229C20.0876 36.785 20.5236 36.8002 23.9996 36.8002C27.4762 36.8002 27.9111 36.785 29.2765 36.7229C30.6391 36.6605 31.5703 36.4447 32.3848 36.1282C33.2264 35.8013 33.9394 35.3629 34.6506 34.6509C35.3626 33.9394 35.8 33.2252 36.128 32.3836C36.4427 31.5695 36.6587 30.6391 36.7227 29.2769C36.784 27.9116 36.8 27.4764 36.8 24.0001C36.8 20.5238 36.784 20.0875 36.7227 18.7222C36.6587 17.3595 36.4427 16.4293 36.128 15.6155C35.8 14.7736 35.3626 14.0594 34.6506 13.348C33.9386 12.636 33.2266 12.1986 32.384 11.872C31.5679 11.5554 30.6373 11.3397 29.2746 11.2773C27.9092 11.2152 27.4746 11.2 23.9972 11.2H24.0012ZM23.5743 13.5065H23.5746L24.0012 13.5066C27.4188 13.5066 27.8239 13.5189 29.1735 13.5802C30.4215 13.6373 31.0989 13.8458 31.5501 14.021C32.1474 14.253 32.5733 14.5304 33.021 14.9784C33.469 15.4264 33.7464 15.8531 33.9789 16.4504C34.1541 16.9011 34.3629 17.5784 34.4197 18.8264C34.481 20.1758 34.4944 20.5811 34.4944 23.9972C34.4944 27.4132 34.481 27.8185 34.4197 29.1679C34.3626 30.4159 34.1541 31.0932 33.9789 31.5439C33.7469 32.1412 33.469 32.5666 33.021 33.0143C32.573 33.4623 32.1477 33.7397 31.5501 33.9717C31.0994 34.1477 30.4215 34.3557 29.1735 34.4127C27.8242 34.4741 27.4188 34.4874 24.0012 34.4874C20.5833 34.4874 20.1782 34.4741 18.8289 34.4127C17.5809 34.3551 16.9035 34.1466 16.4521 33.9714C15.8547 33.7394 15.428 33.462 14.98 33.014C14.532 32.566 14.2547 32.1404 14.0222 31.5428C13.847 31.0922 13.6382 30.4148 13.5814 29.1668C13.52 27.8175 13.5078 27.4121 13.5078 23.994C13.5078 20.5758 13.52 20.1726 13.5814 18.8232C13.6384 17.5752 13.847 16.8979 14.0222 16.4467C14.2542 15.8493 14.532 15.4227 14.98 14.9747C15.428 14.5267 15.8547 14.2493 16.4521 14.0168C16.9033 13.8408 17.5809 13.6328 18.8289 13.5754C20.0097 13.5221 20.4673 13.5061 22.8529 13.5034V13.5066C23.0758 13.5063 23.3156 13.5064 23.5743 13.5065ZM29.2978 17.1675C29.2978 16.3192 29.9858 15.632 30.8338 15.632V15.6315C31.6818 15.6315 32.3698 16.3195 32.3698 17.1675C32.3698 18.0155 31.6818 18.7035 30.8338 18.7035C29.9858 18.7035 29.2978 18.0155 29.2978 17.1675ZM24.0009 17.4267C20.3709 17.4268 17.4278 20.37 17.4278 24.0001C17.4278 27.6303 20.371 30.5722 24.0012 30.5722C27.6314 30.5722 30.5735 27.6303 30.5735 24.0001C30.5735 20.3699 27.6311 17.4267 24.0009 17.4267ZM28.2679 24.0001C28.2679 21.6435 26.3575 19.7334 24.0012 19.7334C21.6446 19.7334 19.7345 21.6435 19.7345 24.0001C19.7345 26.3564 21.6446 28.2668 24.0012 28.2668C26.3575 28.2668 28.2679 26.3564 28.2679 24.0001Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </Text>

              <Text ml={2} fontSize="15px" fontWeight={600}>
                @folasewailoriweddings
              </Text>
            </MenuItem>

            {/* LinkedIn */}
            <MenuItem
              mb={1}
              d="flex"
              onClick={() => {
                share(`https://www.linkedin.com/in/folasewa-i-580b99b0/`);
              }}
              cursor="pointer"
            >
              <Text as="span" color="brand.primary">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.3188 14.8227C17.3188 16.3918 16.1377 17.6473 14.2412 17.6473H14.2064C12.3805 17.6473 11.2 16.3918 11.2 14.8227C11.2 13.2204 12.4164 12 14.277 12C16.1377 12 17.2835 13.2204 17.3188 14.8227ZM16.9605 19.8778V36.2196H11.5216V19.8778H16.9605ZM36.5752 36.2196L36.5754 26.8497C36.5754 21.8303 33.8922 19.4941 30.3131 19.4941C27.4254 19.4941 26.1325 21.0802 25.4107 22.1929V19.8783H19.9711C20.0428 21.4117 19.9711 36.22 19.9711 36.22H25.4107V27.0934C25.4107 26.605 25.446 26.1178 25.5898 25.7681C25.9829 24.7924 26.8779 23.7822 28.3805 23.7822C30.3494 23.7822 31.1365 25.2807 31.1365 27.4767V36.2196H36.5752Z"
                    fill="white"
                  />
                </svg>
              </Text>

              <Text ml={2} fontSize="15px" fontWeight={600}>
                Folasewa Ilori
              </Text>
            </MenuItem>

            {/* Twitter */}
            <MenuItem
              mb={1}
              d="flex"
              onClick={() => {
                share(`https://twitter.com/folasewailori`);
              }}
              cursor="pointer"
            >
              <Text as="span" color="brand.primary">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                    fill="currentColor"
                  />
                  <path
                    d="M23.2812 19.5075L23.3316 20.338L22.4922 20.2363C19.4369 19.8465 16.7677 18.5245 14.5013 16.3043L13.3934 15.2027L13.108 16.0162C12.5036 17.8297 12.8897 19.7448 14.1488 21.0328C14.8203 21.7447 14.6692 21.8464 13.5109 21.4227C13.108 21.2871 12.7554 21.1854 12.7219 21.2362C12.6044 21.3549 13.0073 22.8971 13.3262 23.5073C13.7627 24.3547 14.6524 25.1851 15.6261 25.6766L16.4487 26.0664L15.475 26.0834C14.5349 26.0834 14.5013 26.1003 14.6021 26.4562C14.9378 27.5578 16.264 28.7273 17.7413 29.2357L18.7822 29.5916L17.8756 30.1339C16.5326 30.9136 14.9546 31.3542 13.3766 31.3881C12.6211 31.4051 12 31.4728 12 31.5237C12 31.6932 14.0481 32.6423 15.24 33.0151C18.8157 34.1167 23.063 33.6422 26.2526 31.761C28.5189 30.4221 30.7852 27.7612 31.8428 25.1851C32.4136 23.8123 32.9844 21.304 32.9844 20.1007C32.9844 19.3211 33.0347 19.2194 33.9748 18.2873C34.5288 17.7449 35.0492 17.1517 35.15 16.9823C35.3178 16.6603 35.3011 16.6603 34.4449 16.9484C33.018 17.4568 32.8165 17.389 33.5216 16.6264C34.042 16.084 34.6631 15.101 34.6631 14.8129C34.6631 14.7621 34.4113 14.8468 34.1259 14.9993C33.8238 15.1688 33.1523 15.423 32.6486 15.5756L31.7421 15.8637L30.9195 15.3044C30.4663 14.9993 29.8283 14.6604 29.4926 14.5587C28.6364 14.3214 27.327 14.3553 26.5548 14.6265C24.4563 15.3892 23.1301 17.3551 23.2812 19.5075Z"
                    fill="white"
                  />
                </svg>
              </Text>

              <Text ml={2} fontSize="15px" fontWeight={600}>
                @folasewailori
              </Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </Layout>
    </div>
  );
};

export default Home;
