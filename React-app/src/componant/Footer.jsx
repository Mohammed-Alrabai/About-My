import {
  Stack,
  HStack,
  Link,
  Divider,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../assets/img/logo.svg";

const links = [];
const accounts = [
  {
    url: "https://github.com/Mohammed-Alrabai/",
    label: "Github Account",
    type: "gray",
    icon: <FaGithub />,
  },
  {
    url: "https://www.linkedin.com/in/mohammed-alrabai-987a82246/",
    label: "LinkedIn Account",
    type: "linkedin",
    icon: <FaLinkedin />,
  },
];

const Footer = () => {
  return (
    <Stack
      maxW="5xl"
      marginInline="auto"
      p={8}
      spacing={{ base: 8, md: 0 }}
      justifyContent="space-between"
      alignItems="center"
      direction={{ base: "column", md: "row" }}>
      <Link href="https://templateskart.com" isExternal>
        <Image
          w="70px"
          src={logo}
          alt="TemplatesKart"
        />
      </Link>

      {/* Desktop Screen */}
      <HStack spacing={4} alignItems="center" d={{ base: "none", md: "flex" }}>
        {links.map((link, index) => (
          <CustomLink key={index}>{link}</CustomLink>
        ))}
      </HStack>
      <Stack
        direction="row"
        spacing={5}
        pt={{ base: 4, md: 0 }}
        alignItems="center">
        {accounts.map((sc, index) => (
          <IconButton
            key={index}
            as={Link}
            isExternal
            href={sc.url}
            aria-label={sc.label}
            bg={"blue.500"}
            _hover={{ bg: "blue.600" }}
            icon={sc.icon}
            rounded="md"
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Footer;
