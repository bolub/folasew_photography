import React, { useState, useEffect } from "react";

// Chakra
import {
  // Container,
  // Box,
  chakra,
  Text,
  HStack,
  // Flex,
  // useColorMode,
} from "@chakra-ui/react";

// helpers
import { setItem, getItem } from "../../helpers/localStorage";

// components
// import ColorModeSwitch from "../UI/ColorModeSwitch";

const Header = ({ getSingleImage }) => {
  const categories = [
    // {
    //   label: "All",
    //   value: "home",
    // },
    {
      label: "Weddings",
      value: "weddings",
    },

    {
      label: "Portraits",
      value: "portraits",
    },

    {
      label: "Editorial/Beauty",
      value: "editorial",
    },
  ];

  const [CurrentCategory, setCurrentCategory] = useState();

  // color mode
  // const { colorMode } = useColorMode();

  useEffect(() => {
    setCurrentCategory(getItem("category"));
  }, [setItem]);

  return (
    <chakra.header
      d="flex"
      pt={8}
      pb={{ base: 4, md: 6 }}
      w="100%"
      overflowX="auto"
      px={{ base: 4, md: 32 }}
    >
      <HStack my="auto" mx="auto" spacing={{ base: 6, md: 8 }}>
        {categories?.map((category, index) => {
          return (
            <Text
              px={2}
              fontSize={{ base: "sm", md: "14px" }}
              py={1}
              cursor="pointer"
              borderRadius="md"
              _hover={{
                bg: "#F2F2F2",
                color: "#000000",
              }}
              bg={CurrentCategory === category.value && "#F2F2F2"}
              color={CurrentCategory === category.value && "#000000"}
              onClick={() => {
                setItem("category", category.value);
                setCurrentCategory(category.value);
                getSingleImage(category.value);
              }}
              fontWeight={CurrentCategory === category.value && "bold"}
              key={index}
            >
              {category.label}
            </Text>
          );
        })}
      </HStack>

      {/* <Box d={{ base: "none", md: "block" }} my="auto" ml="auto">
        <ColorModeSwitch />
      </Box> */}
    </chakra.header>
  );
};

export default Header;
