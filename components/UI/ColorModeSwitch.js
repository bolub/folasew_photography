import React from "react";
import { HStack, Box, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack
      spacing={0}
      bg="brand.primary"
      py="3px"
      px="3px"
      borderRadius="full"
    >
      <Box
        onClick={toggleColorMode}
        cursor="pointer"
        color={colorMode === "dark" ? "brand.primary" : "white"}
        bg={colorMode === "dark" ? "white" : "brand.primary"}
        borderRadius="full"
        px={5}
        // px={active === "dark" ? 6 : 4}
        py={1}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.1946 15.8217C16.9231 16.1748 18.7172 16.0122 20.354 15.354C19.684 17.0213 18.5303 18.45 17.0415 19.4562C15.5527 20.4624 13.7969 21.0001 12 21C9.91037 20.9977 7.88662 20.2687 6.27565 18.9378C4.66467 17.6069 3.56683 15.757 3.17031 13.7054C2.77378 11.6537 3.10328 9.52805 4.10232 7.69272C5.10135 5.85739 6.7077 4.42673 8.64599 3.646C7.98779 5.28277 7.82514 7.0769 8.17827 8.80535C8.53139 10.5338 9.38472 12.1204 10.6322 13.3678C11.8796 14.6153 13.4662 15.4686 15.1946 15.8217Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Box>

      <Box
        onClick={toggleColorMode}
        cursor="pointer"
        color={colorMode === "light" ? "brand.primary" : "white"}
        bg={colorMode === "light" ? "white" : "brand.primary"}
        borderRadius="full"
        px={5}
        // px={active === "light" ? 6 : 4}
        py={1}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3V4M12 20V21M21 12H20M4 12H3M18.364 18.364L17.657 17.657M6.343 6.343L5.636 5.636M18.364 5.636L17.657 6.343M6.343 17.657L5.636 18.364M16 12C16 13.0609 15.5786 14.0783 14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16C10.9391 16 9.92172 15.5786 9.17157 14.8284C8.42143 14.0783 8 13.0609 8 12C8 10.9391 8.42143 9.92172 9.17157 9.17157C9.92172 8.42143 10.9391 8 12 8C13.0609 8 14.0783 8.42143 14.8284 9.17157C15.5786 9.92172 16 10.9391 16 12Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Box>
    </HStack>
  );
};

export default ColorModeSwitch;
