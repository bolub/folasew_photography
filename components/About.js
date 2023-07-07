import React from 'react';
import {
  Text,
  Link,
  Image,
  Box,
  chakra,
  Avatar,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';

import { allClients } from '../data/clients';

const AboutUs = () => {
  return (
    <Box px={{ base: 5, md: 52 }} mb={8}>
      <chakra.h2
        mt={10}
        mb={{ base: 6, md: 6 }}
        fontSize={{ base: '3xl', md: '32px' }}
        fontWeight={600}
        textAlign='center'
      >
        About us
      </chakra.h2>

      {/* Some explanations */}
      <Box>
        <Text mb={10} textAlign='center' fontSize='18px'>
          We are Nigerian based wedding and portrait photographers. We dedicate
          ourselves to telling love stories by freezing priceless moments in
          destinations across the world. We offer a blend between{' '}
          <Text as='span' color='brand.primary'>
            documentary, fine artistry and elegance.
          </Text>
        </Text>
      </Box>

      {/* Our clients */}
      <Box mt={24} w='100%' display='flex' flexDir='column'>
        <chakra.h2
          fontSize={{ base: 'lg', md: 'lg' }}
          fontWeight={700}
          mb={8}
          textTransform='uppercase'
        >
          Our Clients
        </chakra.h2>

        <SimpleGrid
          w='100%'
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
                h={{ base: 'auto', md: '200px' }}
                mb={{ base: 8, md: 0 }}
                display='flex'
                justifyContent='center'
                alignItems='center'
              >
                <Image my='auto' src={client.imageUrl} className='faded__img' />
              </Link>
            );
          })}
        </SimpleGrid>
      </Box>

      {/* The team */}
      <Box mt={20} w='100%' display='flex' flexDir='column'>
        <chakra.h2
          fontSize={{ base: 'lg', md: 'lg' }}
          fontWeight={700}
          mb={8}
          textTransform='uppercase'
        >
          The Team
        </chakra.h2>

        <Box>
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
              <Text fontSize='24px' fontWeight='bolder'>
                Folasewa Ilori
              </Text>

              {/* title */}
              <Text color='brand.primary' fontSize='18px' fontWeight='medium'>
                The Creative Director / Lead Photographer
              </Text>

              {/* description */}
              <Text
                mt={6}
                // color={colorMode === 'dark' ? 'gray.200' : 'gray.500'}
                fontSize='18px'
              >
                Folasewa Ilori, a professional photographer specialised in
                portraits and wedding photography has within the past 6+ years,
                worked and collaborated with various commercial brands.
              </Text>

              <Text
                mt={2}
                // color={colorMode === 'dark' ? 'gray.200' : 'gray.500'}
                fontSize='18px'
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
