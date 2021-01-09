import React from "react";
import {
  Drawer,
  DrawerBody,
  // DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorMode,
  Text,
  Heading,
  Link,
  Image,
  Box,
  Wrap,
  chakra,
  HStack,
} from "@chakra-ui/react";

const AboutUs = ({
  disclosure,
  borderTopRadius,
  btnRef,
  height,
  isFullHeight,
  maxHeight,
}) => {
  const { colorMode } = useColorMode();

  const allClients = [
    {
      name: "Gifted Moms",
      imageUrl:
        "https://res.cloudinary.com/bolub/image/upload/v1610230508/folashewa_photography/djhsIED8_400x400.jpg",

      websiteUrl:
        "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwimyO678Y_uAhW4BGMBHVjRBZQQ_BcwC3oECBAQBA&url=http%3A%2F%2Fwww.giftedmom.org%2F&usg=AOvVaw1weQRT_NHuuzNZXQAXtWjj",
    },

    {
      name: "Lumos Nigeria",
      imageUrl:
        "https://res.cloudinary.com/bolub/image/upload/v1610230762/folashewa_photography/Logo.jpg",
      websiteUrl: "https://tolumitfp.fashion",
    },

    {
      name: "tolumiTFP",
      imageUrl:
        "https://res.cloudinary.com/bolub/image/upload/v1610230703/folashewa_photography/logo-footer.png",
      websiteUrl: "https://www.lumos.com.ng/",
    },
  ];

  return (
    <Drawer
      // size="6xl"
      isOpen={disclosure.isOpen}
      placement="bottom"
      onClose={disclosure.onClose}
      finalFocusRef={btnRef}
      isFullHeight={isFullHeight}
    >
      <DrawerOverlay
      // bg="rgba(255, 255, 255, .8)"
      >
        <DrawerContent
          overflowY="auto"
          boxShadow="md"
          borderWidth="1px"
          height="95vh"
          // maxHeight="90"
          borderTopRadius={borderTopRadius}
          bg={colorMode === "light" ? "white" : "#333333"}
        >
          <DrawerCloseButton size="lg" borderRadius="full" bg="gray.100" />

          {/* {title && <DrawerHeader px={0}>{title}</DrawerHeader>} */}

          <DrawerBody overflowY="auto">
            <Box px={{ base: 0, md: 52 }}>
              <chakra.h2
                mt={20}
                mb={{ base: 6, md: 10 }}
                fontSize={{ base: "4xl", md: "42px" }}
                fontWeight={900}
                textAlign="center"
              >
                About us
              </chakra.h2>

              {/* Some explanations */}
              <Box>
                <Text mb={10}>
                  Folasewa Ilori photography cuts across{" "}
                  <Text as="span" color="brand.primary" fontWeight={800}>
                    Wedding, Portrait, Beauty/Editorials and Event(s)
                  </Text>{" "}
                  Photography with over{" "}
                  <Text as="span" fontWeight={800}>
                    7 years
                  </Text>{" "}
                  experience.
                </Text>

                <Text mb={10}>
                  At Folasewa Ilori Photography our Focus is YOU! YES YOU! (Our
                  prospective client). We want to leave you with an experience
                  that would linger on forever by putting smiles on your faces.
                </Text>

                <Text>
                  {" "}
                  We have worked with brands across Africa especially in Nigeria
                  and we are known for Creativity, Creating a very good working
                  environment and our top notch delivery!
                </Text>
              </Box>

              {/* Our clients */}

              <Box mt={8} w="100%" d="flex" flexDir="column">
                {/* <chakra.h2
                  mt={20}
                  // mb={{ base: 6, md: 10 }}
                  fontSize={{ base: "", md: "xl" }}
                  fontWeight={800}
                  // textAlign="center"
                >
                  Our Clients
                </chakra.h2> */}

                <HStack
                  flexWrap="wrap"
                  justifyContent={{ base: "center" }}
                  spacing={{ md: 10 }}
                  mx="auto"
                  mt={{ base: 12, md: 0 }}
                >
                  {allClients?.map((client) => {
                    return (
                      <Link
                        key={client.name}
                        isExternal
                        href={client.websiteUrl}
                        my="auto"
                        w="180px"
                        h={{ base: "100px", md: "200px" }}
                        mb={{ base: 8, md: 0 }}
                        // borderWidth="1px"
                        d="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Image src={client.imageUrl} />
                      </Link>
                    );
                  })}
                </HStack>
              </Box>
            </Box>
          </DrawerBody>

          {/* <DrawerFooter>
						<Button variant="outline" mr={3} onClick={disclosure.onClose}>
							Cancel
						</Button>
						<Button color="blue">Save</Button>
					</DrawerFooter> */}
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default AboutUs;
