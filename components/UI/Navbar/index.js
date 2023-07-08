import React, { useState } from 'react';

import Link from 'next/link';

import {
  chakra,
  Text,
  Flex,
  Button,
  HStack,
  useDisclosure,
  Image,
  Link as ExtLink,
} from '@chakra-ui/react';

// components
import MobileView from './MobileView';
import AboutUs from '../../About';
import CustomDrawer from '../CustomDrawer';
import Contact from '../../Contact';
import Academy from '../../Academy';
import { ColorModeSwitchMobile } from '../ColorModeSwitch';

const Navbar = () => {
  // state
  const [toShow, setToShow] = useState();

  const generalDisclosure = useDisclosure();
  const generalRef = React.useRef();

  return (
    <chakra.nav
      display='flex'
      px={{ base: 4, md: 12 }}
      flexDir='column'
      justifyContent='center'
      pos='sticky'
      top={0}
      w='100%'
      py={{ base: 4, md: 6 }}
      zIndex={100}
    >
      <Flex>
        <Link href='/'>
          <Image
            my='auto'
            w='140px'
            cursor='pointer'
            maxH='42px'
            src='./FolasebeansLogo.PNG'
          />
        </Link>

        {/* desktop view */}
        <HStack
          my='auto'
          display={{ base: 'none', md: 'flex' }}
          spacing={8}
          ml='auto'
        >
          <Link passHref href='/'>
            <Text
              fontSize='16px'
              cursor='pointer'
              fontWeight={600}
              _hover={{
                textDecor: 'none',
              }}
            >
              Home
            </Text>
          </Link>

          <Link passHref href='/about'>
            <Text
              fontSize='16px'
              cursor='pointer'
              fontWeight={600}
              _hover={{
                textDecor: 'none',
              }}
            >
              About us
            </Text>
          </Link>

          <Link passHref href='/academy'>
            <Text
              fontSize='16px'
              cursor='pointer'
              fontWeight={600}
              _hover={{
                textDecor: 'none',
              }}
            >
              Photography Academy
            </Text>
          </Link>

          <Link passHref href='/gallery/?category=weddings'>
            <Text
              fontSize='16px'
              cursor='pointer'
              fontWeight={500}
              _hover={{
                textDecor: 'none',
              }}
            >
              Gallery
            </Text>
          </Link>

          <ExtLink
            _hover={{ textDecor: 'none' }}
            href='https://19fjc2jot86.typeform.com/to/sRkOu5jd'
          >
            <Button
              bg='brand.primary'
              color='white'
              colorScheme='primary'
              fontSize='md'
            >
              Book us
            </Button>
          </ExtLink>

          {/* Color mode switch */}
          <ColorModeSwitchMobile />
        </HStack>

        {/*==================== Mobile view for navbar ============================== */}
        <MobileView />
        {/* ============================================================ */}
      </Flex>

      <CustomDrawer
        placement='bottom'
        disclosure={generalDisclosure}
        btnRef={generalRef}
        height={{ base: '80vh', md: '95vh' }}
      >
        {toShow === 'academy' && <Academy />}
        {toShow === 'about' && <AboutUs />}
        {toShow === 'contact' && <Contact />}
      </CustomDrawer>
    </chakra.nav>
  );
};

export default Navbar;
