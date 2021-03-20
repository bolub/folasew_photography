import React from "react";

import { Text, Link, Box, chakra, Center, Button } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box px={{ base: 5, md: 52 }}>
      <chakra.h2
        mt={20}
        mb={{ base: 6, md: 10 }}
        fontSize={{ base: "3xl", md: "32px" }}
        fontWeight={900}
        textAlign="center"
      >
        Contact us
      </chakra.h2>
    </Box>
  );
};

export default Contact;
