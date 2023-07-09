import React from 'react';
import { Text, Link, Image, Box, chakra, Avatar, Flex } from '@chakra-ui/react';

import { allClients } from '../data/clients';

const AboutUs = () => {
  return (
    <Box>
      <chakra.section
        // pt='64px'
        pt={{ base: 16, md: 24 }}
        w='full'
        maxW='900px'
        mx='auto'
      >
        <Text
          textAlign='center'
          fontWeight={700}
          fontSize={{ base: '3xl', md: '5xl' }}
          as='h1'
        >
          About us
        </Text>

        <Text mt='20px' textAlign='center' fontSize='18px'>
          We are Nigerian based wedding and portrait photographers. We dedicate
          ourselves to telling love stories by freezing priceless moments in
          destinations across the world. We offer a blend between{' '}
          <Text as='span' color='brand.primary'>
            documentary, fine artistry and elegance.
          </Text>
        </Text>
      </chakra.section>

      {/* Our clients */}
      <chakra.section
        mt={{ base: 16, md: 32 }}
        w='full'
        display='flex'
        flexDir='column'
      >
        <Flex
          gap={{ base: '10px', md: '40px' }}
          mx='auto'
          rounded='lg'
          px='32px'
          py='32px'
          bgColor='primary.100'
          alignItems='center'
          justifyContent='center'
          w='full'
          flexWrap='wrap'
        >
          {allClients?.map((client) => {
            return (
              <Link
                key={client.name}
                isExternal
                href={client.websiteUrl}
                maxW={{ base: '130px', md: '180px' }}
                display='flex'
                justifyContent='center'
                alignItems='center'
              >
                <Image my='auto' src={client.imageUrl} className='faded__img' />
              </Link>
            );
          })}
        </Flex>
      </chakra.section>

      {/* The team */}
      <chakra.section
        mt={{ base: 16, md: 32 }}
        mb={32}
        w='full'
        maxW='900px'
        mx='auto'
        display='flex'
        flexDir='column'
      >
        <Box>
          <Flex flexDir={{ base: 'column', md: 'row' }}>
            {/* Image */}
            <Avatar
              name='Folasewa Ilori'
              src='https://res.cloudinary.com/bolub/image/upload/v1610782902/folashewa_photography/IMG_5671.jpg'
              h={{ base: '320px', md: '360px' }}
              w={{ base: 'auto', md: '300px' }}
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
              <Text color='brand.primary' fontSize='20px' fontWeight='medium'>
                The Creative Director / Lead Photographer
              </Text>

              {/* description */}
              <Text mt={6} fontSize='18px'>
                Folasewa Ilori, a professional photographer specialised in
                portraits and wedding photography has within the past 6+ years,
                worked and collaborated with various commercial brands.
              </Text>

              <Text mt={5} fontSize='18px'>
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
      </chakra.section>
    </Box>
  );
};

export default AboutUs;
