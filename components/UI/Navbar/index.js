import React, { useState } from "react";

import Link from "next/link";

import {
  chakra,
  useColorMode,
  Text,
  Flex,
  Button,
  HStack,
  useDisclosure,
  Box,
  Image,
  Link as ExtLink,
} from "@chakra-ui/react";

// components
import MobileView from "./MobileView";
import AboutUs from "../../About";
import CustomDrawer from "../CustomDrawer";
import Contact from "../../Contact";
import Academy from "../../Academy";
import { ColorModeSwitchMobile } from "../ColorModeSwitch";

const Navbar = () => {
  // state
  const [toShow, setToShow] = useState();

  // color mode
  const { colorMode } = useColorMode();

  // general
  const generalDisclosure = useDisclosure();
  const generalRef = React.useRef();

  // data
  const navItems = [
    {
      label: "About us",
      id: "about",
    },

    {
      label: "Photography Academy",
      id: "academy",
    },
    // {
    //   label: "Contact",
    //   id: "contact",
    // },
  ];

  return (
    <chakra.nav
      d="flex"
      bg={colorMode === "light" ? "white" : "#333333"}
      px={{ base: 4, md: 12 }}
      // h="118px"
      flexDir="column"
      justifyContent="center"
      pos="sticky"
      top={0}
      w="100%"
      borderBottomWidth="1px"
      py={{ base: 4, md: 6 }}
      zIndex={100}
    >
      <Flex>
        {/* <Text
          my="auto"
          textTransform="uppercase"
          color="brand.primary"
          fontWeight={900}
          fontSize={{ base: "sm", md: "md" }}
        >
          Folasewa ilori <br /> photography
        </Text> */}
        <Link href="/">
          <Image
            my="auto"
            w="140px"
            cursor="pointer"
            maxH="42px"
            // src="https://res.cloudinary.com/bolub/image/upload/v1610814703/folashewa_photography/IMG_5272.png"
            src="./FolasebeansLogo.PNG"
          />
        </Link>

        {/* desktop view */}
        <HStack
          my="auto"
          d={{ base: "none", md: "flex" }}
          spacing={8}
          // textTransform="uppercase"
          ml="auto"
        >
          <Link passHref href="/">
            <Text
              fontSize="16px"
              cursor="pointer"
              fontWeight={500}
              _hover={{
                textDecor: "none",
              }}
            >
              Home
            </Text>
          </Link>

          {navItems?.map((item, index) => {
            return (
              <Text
                key={item.id}
                onClick={() => {
                  setToShow(item.id);
                  generalDisclosure.onOpen();
                }}
                ref={generalRef}
                fontSize="16px"
                cursor="pointer"
                fontWeight={500}
              >
                {item.label}
              </Text>
            );
          })}

          <Link passHref href="/gallery">
            <Text
              fontSize="16px"
              cursor="pointer"
              fontWeight={500}
              _hover={{
                textDecor: "none",
              }}
            >
              Gallery
            </Text>
          </Link>

          <ExtLink
            _hover={{ textDecor: "none" }}
            href="https://19fjc2jot86.typeform.com/to/sRkOu5jd"
          >
            <Button
              size="lg"
              bg="brand.primary"
              color="white"
              colorScheme="primary"
              fontSize="md"
              fontWeight={900}
            >
              Book us
            </Button>
          </ExtLink>

          {/* Color mode switch */}

          <ColorModeSwitchMobile />
        </HStack>

        {/*==================== Mobile view for navbar ============================== */}
        <MobileView
          gd={generalDisclosure}
          gr={generalRef}
          setToShow={setToShow}
        />
        {/* ============================================================ */}
      </Flex>

      <CustomDrawer
        placement="bottom"
        disclosure={generalDisclosure}
        btnRef={generalRef}
        height={{ base: "80vh", md: "95vh" }}
      >
        {toShow === "academy" && <Academy />}
        {toShow === "about" && <AboutUs />}
        {toShow === "contact" && <Contact />}
      </CustomDrawer>
    </chakra.nav>
  );
};

export default Navbar;
