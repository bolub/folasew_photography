import React from "react";
import { Box, Text, Button, Link } from "@chakra-ui/react";

const Intro = () => {
  return (
    <Box
      w={{ md: "80%" }}
      as="section"
      pt={32}
      pb={48}
      // mt={32}
      // mb={20}
    >
      <Text
        fontWeight={900}
        fontSize={{ base: "2xl", md: "3xl" }}
        as="h1"
        // textAlign="center"
      >
        Welcome To Folasewa Ilori Photography
      </Text>

      <Text mt={4}>
        Folasewa Ilori Photography is a Nigerian based wedding and portrait
        photography brand. We offer a blend between documentary, fine artistry
        and elegance.
        <br />
        <br />
        We are happy you found us, we hope you enjoy your stay here.
      </Text>

      {/* <Link> */}
      <Button
        href="#testimonials"
        as={Link}
        borderBottomWidth="1px"
        pb={1}
        cursor="pointer"
        colorScheme="primary"
        // borderBottomColor="brand.primary"
        variant="ghost"
        borderRadius="none"
        // color="brand.primary"
        mt={8}
        pl={2}
        // d="inline-flex"
      >
        <Text>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            width="30"
            height="30"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </Text>

        <Text ml={2} fontSize="16px" fontWeight="bold">
          Our Testimonials
        </Text>
      </Button>
      {/* </Link> */}

      {/* <Button
        size="lg"
        bg="brand.primary"
        color="white"
        colorScheme="primary"
        fontSize="md"
        fontWeight={900}
      >
        Book us
      </Button> */}
    </Box>
  );
};

export default Intro;
