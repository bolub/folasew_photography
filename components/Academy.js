import React from "react";

import { Text, Link, Box, chakra, Center, Button } from "@chakra-ui/react";

const Academy = () => {
  return (
    <Box px={{ base: 5, md: 52 }}>
      <chakra.h2
        mt={10}
        mb={{ base: 6, md: 10 }}
        fontSize={{ base: "3xl", md: "42px" }}
        fontWeight={900}
        textAlign="center"
      >
        Photography Academy
      </chakra.h2>

      {/* Some explanations */}
      <Box>
        <Text mb={10}>
          Admissions into Our Photography Academy hold twice a year with course
          duration ranging from{" "}
          <Text as="span" color="brand.primary" fontWeight={800}>
            5 to 12 months
          </Text>{" "}
          and cost between{" "}
          <Text as="span" color="brand.primary" fontWeight={800}>
            ₦100,000 and ₦150,000{" "}
          </Text>
          respectively
        </Text>

        <Text mb={10}>
          The academy boasts of well Seasoned and Experienced Trainers who would
          walk side by side with you through the training and internship period
          with in-depth photo-business classes to help propel you for the best
          photography experience.
        </Text>

        <Text>
          For more enquiries, please call us on{" "}
          <Link color="brand.primary" href="tel:2348053667690" fontWeight={800}>
            +2348053667690
          </Link>
        </Text>
      </Box>

      <Center
        mt={{ base: 8, md: 16 }}
        borderTopWidth={{ md: "1px" }}
        borderBottomWidth={{ md: "1px" }}
        py={{ md: 6 }}
        mb={10}
      >
        <Button
          size="lg"
          bg="brand.primary"
          color="white"
          colorScheme="primary"
          fontSize="md"
          fontWeight="bold"
        >
          Register now
        </Button>
      </Center>
    </Box>
  );
};

export default Academy;
