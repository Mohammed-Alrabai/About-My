import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Text,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Icon,
  IconButton,
  useDisclosure,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiTwotoneThunderbolt } from "react-icons/ai";
import { FiSun, FiMoon } from "react-icons/fi";
import logo from "../assets/img/logo.svg";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const menuProps = {
    bg: useColorModeValue("gray.200", "gray.700"),
    color: useColorModeValue("blue.500", "blue.200"),
  };

  return (
    <Box
      px={4}
      boxShadow="lg"
      bg={useColorModeValue("gray.100", "gray.900")}
      width="100%"
      position={"sticky"}
      top={0}
      zIndex={100}>
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW={800}
        mx="auto">
        <IconButton
          size="md"
          icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          aria-label="Open Menu"
          display={["inherit", "inherit", "none"]}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Avatar
            href="#"
            as={Link}
            size="md"
            showBorder={true}
            borderColor="blue.400"
            rounded="full"
            src={logo}
          />
        </HStack>
        <IconButton
          aria-label="Color Switcher"
          icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
          onClick={toggleColorMode}
        />
      </Flex>
    </Box>
  );
}

