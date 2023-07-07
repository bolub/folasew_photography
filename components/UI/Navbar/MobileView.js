import React from 'react';

import Link from 'next/link';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  VStack,
  Link as ExtLink,
  Box,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';

// components
import { ColorModeSwitchMobile } from '../ColorModeSwitch';
import CustomDrawer from '../CustomDrawer';
import { setItem } from '../../../helpers/localStorage';

const MobileView = ({ setToShow, aboutUsbtnRef, gd, gr }) => {
  const sidebarDisclosure = useDisclosure();
  const sidebarBtnRef = React.useRef();

  return (
    <>
      <Box display={{ base: 'block', md: 'none' }} my='auto' ml='auto'>
        <ColorModeSwitchMobile />
      </Box>

      <Box my='auto' display={{ base: 'block', md: 'none' }} ml={2}>
        <IconButton
          aria-label='Menu'
          bg='none'
          onClick={sidebarDisclosure.onOpen}
          ref={sidebarBtnRef}
          icon={
            <Text w='24px' h='24px'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
                  clipRule='evenodd'
                />
              </svg>
            </Text>
          }
        />
      </Box>

      <CustomDrawer disclosure={sidebarDisclosure} btnRef={sidebarBtnRef}>
        <Box py={10} px={5}>
          <VStack spacing={10} align='left'>
            <Link href='/' passHref>
              <Text
                borderBottomWidth='1px'
                pb={3}
                cursor='pointer'
                fontWeight={800}
              >
                Home
              </Text>
            </Link>

            <Text
              borderBottomWidth='1px'
              pb={3}
              cursor='pointer'
              fontWeight={800}
              ref={gr}
              onClick={() => {
                sidebarDisclosure.onClose();
                gd.onOpen();
                setToShow('about');
              }}
            >
              About us
            </Text>

            <Accordion allowMultiple>
              <AccordionItem borderTopWidth={0}>
                <AccordionButton px={0}>
                  <Box fontWeight={800} flex='1' textAlign='left'>
                    Gallery
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} px={0}>
                  <Link
                    onClick={() => {
                      setItem('weddings');
                    }}
                    href='/gallery/?category=weddings'
                    passHref
                  >
                    <Text
                      fontSize='sm'
                      mb={2}
                      cursor='pointer'
                      fontWeight={500}
                    >
                      Weddings
                    </Text>
                  </Link>

                  <Link
                    onClick={() => {
                      setItem('portraits');
                    }}
                    href='/gallery/?category=portraits'
                    passHref
                  >
                    <Text
                      fontSize='sm'
                      mb={2}
                      cursor='pointer'
                      fontWeight={500}
                    >
                      Portraits
                    </Text>
                  </Link>

                  <Link
                    onClick={() => {
                      setItem('editorial');
                    }}
                    href='/gallery/?category=editorial'
                    passHref
                  >
                    <Text
                      fontSize='sm'
                      mb={2}
                      cursor='pointer'
                      fontWeight={500}
                    >
                      Editorial/Beauty
                    </Text>
                  </Link>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            {/* <Link href="/gallery" passHref>
              <Text
                borderBottomWidth="1px"
                pb={3}
                cursor="pointer"
                fontWeight={800}
              >
                Gallery
              </Text>
            </Link> */}

            <Text
              borderBottomWidth='1px'
              pb={3}
              cursor='pointer'
              fontWeight={800}
              ref={gr}
              onClick={() => {
                sidebarDisclosure.onClose();
                gd.onOpen();
                setToShow('academy');
              }}
            >
              Photography Academy
            </Text>

            <ExtLink
              borderBottomWidth='1px'
              pb={3}
              cursor='pointer'
              fontWeight={800}
              isExternal
              _hover={{
                textDecor: 'none',
              }}
              href='https://19fjc2jot86.typeform.com/to/sRkOu5jd'
            >
              Book us
            </ExtLink>

            {/* <Text
              borderBottomWidth="1px"
              pb={3}
              cursor="pointer"
              fontWeight={800}
            >
              Contact
            </Text> */}
          </VStack>
        </Box>
      </CustomDrawer>
    </>
  );
};

export default MobileView;
