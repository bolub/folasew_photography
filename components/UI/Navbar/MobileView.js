import React from "react";

import {
  // chakra,
  // useColorMode,
  DrawerCloseButton,
  Text,
  // Flex,
  VStack,
  Box,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";

// components
import { ColorModeSwitchMobile } from "../ColorModeSwitch";
import CustomDrawer from "../CustomDrawer";

const MobileView = ({ aboutUsDisclosure, aboutUsbtnRef }) => {
  const sidebarDisclosure = useDisclosure();
  const sidebarBtnRef = React.useRef();

  return (
    <>
      {/* Color mode switch */}
      <Box d={{ base: "block", md: "none" }} my="auto" ml="auto">
        <ColorModeSwitchMobile />
      </Box>

      {/* Sidebar Toggler */}
      <Box
        my="auto"
        d={{ base: "block", md: "none" }}
        ml={2}
        // color="white"
      >
        <IconButton
          aria-label="Menu"
          bg="none"
          onClick={sidebarDisclosure.onOpen}
          ref={sidebarBtnRef}
          icon={
            <Text w="24px" h="24px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </Text>
          }
        />
      </Box>

      <CustomDrawer disclosure={sidebarDisclosure} btnRef={sidebarBtnRef}>
        <DrawerCloseButton />
        <Box py={10} px={5}>
          <VStack spacing={10} align="left">
            <Text
              borderBottomWidth="1px"
              pb={3}
              cursor="pointer"
              fontWeight={800}
            >
              Home
            </Text>

            <Text
              borderBottomWidth="1px"
              pb={3}
              cursor="pointer"
              fontWeight={800}
              ref={aboutUsbtnRef}
              onClick={() => {
                sidebarDisclosure.onClose();
                aboutUsDisclosure.onOpen();
              }}
            >
              About us
            </Text>

            <Text
              borderBottomWidth="1px"
              pb={3}
              cursor="pointer"
              fontWeight={800}
            >
              Contact
            </Text>

            <Text
              borderBottomWidth="1px"
              pb={3}
              cursor="pointer"
              fontWeight={800}
            >
              Academy
            </Text>
          </VStack>
        </Box>
      </CustomDrawer>
    </>
  );
};

export default MobileView;
