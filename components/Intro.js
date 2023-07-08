import React from 'react';
import { Box, Text, Button, Link } from '@chakra-ui/react';

const Intro = () => {
  return (
    <Box
      // w={{ md: "80%" }}
      textAlign='center'
      as='section'
      pt={{ base: 16, md: 24 }}
    >
      <Text fontWeight={700} fontSize={{ base: '3xl', md: '5xl' }} as='h1'>
        Folasewa Ilori Photography
      </Text>

      <Text fontSize='lg' mt={4}>
        We're a Nigerian based wedding and portrait photography brand. We offer
        a blend between documentary, fine artistry and elegance.
        <br />
        We are happy you found us, we hope you enjoy your stay here.
      </Text>
    </Box>
  );
};

export default Intro;
