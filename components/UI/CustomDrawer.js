import React from "react";
import {
  Drawer,
  DrawerBody,
  // DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorMode,
  CloseButton,
} from "@chakra-ui/react";

const CustomDrawer = ({
  disclosure,
  borderTopRadius,
  btnRef,
  height,
  placement,
  children,
  size,
  isFullHeight,
  title,
  maxHeight,
}) => {
  const { colorMode } = useColorMode();

  return (
    <Drawer
      size={size}
      isOpen={disclosure.isOpen}
      placement={placement}
      onClose={disclosure.onClose}
      finalFocusRef={btnRef}
      isFullHeight={isFullHeight}
      autoFocus={false}
    >
      <DrawerOverlay
      // bg="rgba(255, 255, 255, .8)"
      >
        <DrawerContent
          overflowY="auto"
          boxShadow="md"
          borderWidth="1px"
          height={height}
          maxHeight={maxHeight}
          borderTopRadius={borderTopRadius}
          // bg={colorMode === "light" ? "white" : "#333333"}
        >
          <CloseButton
            onClick={disclosure.onClose}
            size="lg"
            borderRadius="full"
            ml="auto"
            mmb={0}
          />

          {title && <DrawerHeader px={0}>{title}</DrawerHeader>}

          <DrawerBody overflowY="auto" p={0}>
            {children}
          </DrawerBody>

          {/* <DrawerFooter>
						<Button variant="outline" mr={3} onClick={disclosure.onClose}>
							Cancel
						</Button>
						<Button color="blue">Save</Button>
					</DrawerFooter> */}
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default CustomDrawer;
