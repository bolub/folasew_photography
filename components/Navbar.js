import { chakra, useColorMode, Text, Flex, HStack } from "@chakra-ui/react";

const Navbar = () => {
  const { colorMode } = useColorMode();

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
      py={8}
    >
      <Flex>
        <Text textTransform="uppercase" color="brand.primary" fontWeight={900}>
          Folasewa ilori <br /> photography
        </Text>

        <HStack spacing={6} textTransform="uppercase" ml="auto">
          <Text fontSize="sm" cursor="pointer" fontWeight={800}>
            About
          </Text>
          <Text fontSize="sm" cursor="pointer" fontWeight={800}>
            Contact
          </Text>
        </HStack>
      </Flex>
    </chakra.nav>
  );
};

export default Navbar;
