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
    {
      label: "All",
      value: "home",
    },
    {
      label: "Weddings",
      value: "weddings",
    },
    {
      label: "Product",
      value: "product",
    },
    {
      label: "Outdoor",
      value: "outdoor",
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
      px={{ base: 4, md: 32 }}
    >
      <HStack my="auto" spacing={10}>
        {categories?.map((category, index) => {
          return (
            <Text
              px={3}
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

      <Box my="auto" ml="auto">
        <ColorModeSwitch />
      </Box>
    </chakra.header>
  );
};

export default Header;
