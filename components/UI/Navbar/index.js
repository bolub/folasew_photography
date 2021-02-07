import React, { useState } from "react";

import {
  chakra,
  useColorMode,
  Text,
  Flex,
  HStack,
  useDisclosure,
  Image,
  Link,
} from "@chakra-ui/react";

// components
import MobileView from "./MobileView";
import AboutUs from "../../About";
import CustomDrawer from "../CustomDrawer";
import Contact from "../../Contact";
import Academy from "../../Academy";

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
      px={{ base: 4, md: 32 }}
      // h="118px"
      flexDir="column"
      justifyContent="center"
      pos="sticky"
      top={0}
      w="100%"
      borderBottomWidth="1px"
      py={{ base: 4, md: 8 }}
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

        <Image
          my="auto"
          w="170px"
          maxH="62px"
          // src="https://res.cloudinary.com/bolub/image/upload/v1610814703/folashewa_photography/IMG_5272.png"
          src="./FolasebeansLogo.PNG"
        />

        {/* desktop view */}
        <HStack
          my="auto"
          d={{ base: "none", md: "flex" }}
          spacing={6}
          textTransform="uppercase"
          ml="auto"
        >
          {navItems?.map((item, index) => {
            return (
              <Text
                key={item.id}
                onClick={() => {
                  setToShow(item.id);
                  generalDisclosure.onOpen();
                }}
                ref={generalRef}
                fontSize="sm"
                cursor="pointer"
                fontWeight={800}
              >
                {item.label}
              </Text>
            );
          })}

          <Link
            // onClick={() => {
            //   setToShow(item.id);
            //   generalDisclosure.onOpen();
            // }}
            fontSize="sm"
            cursor="pointer"
            fontWeight={800}
            isExternal
            _hover={{
              textDecor: "none",
            }}
            href="https://19fjc2jot86.typeform.com/to/sRkOu5jd"
          >
            Book us
          </Link>
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
