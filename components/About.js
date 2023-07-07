import React from 'react';
import {
  Text,
  Link,
  Image,
  Box,
  chakra,
  Avatar,
  Flex,
  useColorMode,
  SimpleGrid,
} from '@chakra-ui/react';

// data
import { allClients } from '../data/clients';

const AboutUs = ({}) => {
  const { colorMode } = useColorMode();

  return (
    <Box px={{ base: 5, md: 52 }} mb={8}>
      <chakra.h2
        mt={10}
        mb={{ base: 6, md: 6 }}
        fontSize={{ base: '3xl', md: '32px' }}
        fontWeight={900}
        textAlign='center'
        className='josefin'
      >
        About us
      </chakra.h2>

      {/* Some explanations */}
      <Box>
        <Text mb={10} textAlign='center'>
          We are Nigerian based wedding and portrait photographers. We dedicate
          ourselves to telling love stories by freezing priceless moments in
          destinations across the world. We offer a blend between{' '}
          <Text as='span' color='brand.primary' fontWeight={800}>
            documentary, fine artistry and elegance.
          </Text>
        </Text>
        {/* <Text mb={10}>
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
          prospective client). We want to leave you with an experience that
          would linger on forever by putting smiles on your faces.
        </Text>

        <Text>
          {" "}
          We have worked with brands across Africa especially in Nigeria and we
          are known for Creativity, Creating a very good working environment and
          our top notch delivery!
        </Text> */}
      </Box>

      {/* Our clients */}
      <Box mt={24} w='100%' display='flex' flexDir='column'>
        <chakra.h2
          // mb={{ base: 6, md: 10 }}
          fontSize={{ base: '', md: 'xl' }}
          fontWeight={900}
          mb={0}
          className='josefin'
          // textTransform="uppercase"
          // textAlign="center"
        >
          Our Clients
        </chakra.h2>

        <SimpleGrid
          // borderWidth="1px"
          // flexWrap="wrap"
          w='100%'
          // justifyContent={{ base: "center" }}
          // spacing={0}
          // mx="auto"
          mt={{ base: 12, md: 0 }}
          columns={{ base: 1, lg: 3 }}
        >
          {allClients?.map((client) => {
            return (
              <Link
                key={client.name}
                isExternal
                href={client.websiteUrl}
                my='auto'
                mx={{ base: 'auto', md: 0 }}
                bg='white'
                w='160px'
                // w="180px"
                // borderLeftWidth="1px"
                // borderTopWidth={{ md: "1px" }}
                // borderBottomWidth={{ md: "1px" }}
                h={{ base: 'auto', md: '200px' }}
                mb={{ base: 8, md: 0 }}
                // borderWidth="1px"
                display='flex'
                justifyContent='center'
                alignItems='center'
                my='auto'
              >
                <Image
                  // py={4}
                  // bg="white"
                  // w="100%"
                  // sx={{ md: { filter: "grayscale(100%)", opacity: 0.5 } }}
                  // px={2}
                  my='auto'
                  // ml={client.name === "Gifted Moms" && 6}
                  src={client.imageUrl}
                  className='faded__img'
                />
              </Link>
            );
          })}
        </SimpleGrid>
      </Box>

      {/* The team */}
      <Box mt={20} w='100%' display='flex' flexDir='column'>
        <chakra.h2
          // mb={{ base: 6, md: 10 }}
          fontSize={{ base: '', md: 'xl' }}
          fontWeight={900}
          mb={0}
          className='josefin'
          // textTransform="uppercase"
          // textAlign="center"
        >
          The Team
        </chakra.h2>

        <Box mt={12}>
          {/* Folasewa team */}
          <Flex flexDir={{ base: 'column', md: 'row' }}>
            {/* Image */}
            <Avatar
              name='Folasewa Ilori'
              src='https://res.cloudinary.com/bolub/image/upload/v1610782902/folashewa_photography/IMG_5671.jpg'
              h='360px'
              w='300px'
              borderRadius='md'
              mr={6}
              mb={{ base: 4, md: 0 }}
            />

            <Box>
              {/* name */}
              <Text fontSize='lg' fontWeight='bolder'>
                Folasewa Ilori
              </Text>

              {/* title */}
              <Text color='brand.primary' fontSize='md'>
                The Creative Director / Lead Photographer
              </Text>

              {/* description */}
              <Text
                mt={6}
                color={colorMode === 'dark' ? 'gray.200' : 'gray.500'}
              >
                Folasewa Ilori, a professional photographer specialised in
                portraits and wedding photography has within the past 6+ years,
                worked and collaborated with various commercial brands.
              </Text>

              <Text
                mt={2}
                color={colorMode === 'dark' ? 'gray.200' : 'gray.500'}
              >
                He holds a degree in Economics from the University of Ado-Ekiti
                (now EKSU) and Msc in Humanitarian and Refugee Studies from the
                University of Ibadan. This attests to his pursuit of excellence
                in academics which in turn translates to a high value of
                professionalism and customer satisfaction with the utmost
                attention to client experience and the smallest detail.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
