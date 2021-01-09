import { chakra, useColorMode, Text, Flex, HStack } from "@chakra-ui/react";

// components
import MobileView from "./MobileView";

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
      py={{ base: 4, md: 8 }}
      zIndex={100}
    >
      <Flex>
        <Text
          my="auto"
          textTransform="uppercase"
          color="brand.primary"
          fontWeight={900}
          fontSize={{ base: "sm", md: "md" }}
        >
          Folasewa ilori <br /> photography
        </Text>

        {/* desktop view */}
        <HStack
          my="auto"
          d={{ base: "none", md: "flex" }}
          spacing={6}
          textTransform="uppercase"
          ml="auto"
        >
          {/* About */}
          <Text fontSize="sm" cursor="pointer" fontWeight={800}>
            About us
          </Text>

          <Text fontSize="sm" cursor="pointer" fontWeight={800}>
            Academy
          </Text>

          {/* Contact */}
          <Text fontSize="sm" cursor="pointer" fontWeight={800}>
            Contact
          </Text>
        </HStack>

        {/*==================== Mobile view ============================== */}
        <MobileView />
        {/* ============================================================ */}
      </Flex>
    </chakra.nav>
  );
};

export default Navbar;
