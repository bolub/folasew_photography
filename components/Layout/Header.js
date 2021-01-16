import React, { useState, useEffect } from "react";

// Chakra
import {
  Container,
  Box,
  chakra,
  Text,
  HStack,
  Flex,
  useColorMode,
} from "@chakra-ui/react";

// helpers
import { setItem, getItem } from "../../helpers/localStorage";

// components
import ColorModeSwitch from "../UI/ColorModeSwitch";

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
      value: "Portraits",
    },
    {
      label: "Beauty",
      value: "beauty",
    },
    {
      label: "Editorial/Fine art",
      value: "Editorial/Fine art",
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
      pt={6}
      pb={8}
      w="100%"
      d="flex"
      overflowX="auto"
      px={{ base: 4, md: 32 }}
    >
      <HStack my="auto" spacing={{ base: 6, md: 10 }}>
        {categories?.map((category, index) => {
          return (
            <Text
              px={3}
              fontSize={{ base: "sm", md: "md" }}
              py={2}
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
              fontWeight="bold"
              key={index}
            >
              {category.label}
            </Text>
          );
        })}
      </HStack>

      <Box d={{ base: "none", md: "block" }} my="auto" ml="auto">
        <ColorModeSwitch />
      </Box>
    </chakra.header>
  );
};

export default Header;
