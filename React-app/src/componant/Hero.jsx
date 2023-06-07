import * as React from "react";
import {
  chakra,
  Container,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Image,
  Skeleton,
  Box,
  Link,
  Icon,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// Here we have used react-icons package for the icons
import { GoChevronRight } from "react-icons/go";
import { MdBolt } from "react-icons/md";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <Container maxW="6xl" px={{ base: 6, md: 3 }} py={24}>
      <Stack direction={{ base: "column", md: "row" }} justifyContent="center">
        <Stack
          direction="column"
          spacing={6}
          justifyContent="center"
          alignItems="center"
          maxW="600px">
          <HStack
            as={Link}
            p={1}
            rounded="full"
            fontSize="sm"
            w="max-content"
            bg={useColorModeValue("gray.300", "gray.700")}></HStack>
          <Box
            className="bg-grid"
            w={"0 "}
            h={"200px"}
            bg={"transparent"}
            position={"absolute"}></Box>
          <chakra.h1
            position={"relative"}
            fontSize="5xl"
            fontWeight="bold"
            textAlign="right"
            lineHeight={1.9}>
            <chakra.span color="blue.500" position={"absolute"} top={"-50px"}>
              👋
            </chakra.span>
            مرحبًا بك في موقعي <br></br> أنا محمد الربعي.
            <chakra.span color="blue.500"></chakra.span>
          </chakra.h1>
          <Text
            fontSize="1.3rem"
            textAlign="right"
            lineHeight="1.375"
            fontWeight="400"
            color="gray.500">
            هذا الموقع هو نافذتي للتعبير عن نفسي ومشاركة قصتي ورحلتي معك.
          </Text>
          <HStack
            spacing={{ base: 0, sm: 2 }}
            mb={{ base: "3rem !important", sm: 0 }}
            flexWrap="wrap">
            ;
            <chakra.button
              w={{ base: "100%", sm: "auto" }}
              h={12}
              px={6}
              color="white"
              textAlign={"center"}
              size="lg"
              rounded="md"
              mb={{ base: 2, sm: 0 }}
              zIndex={5}
              lineHeight={1}
              bgGradient="linear(to-l, #0ea5e9,#2563eb)"
              _hover={{
                bgGradient: "linear(to-l, #0ea5e9,#2563eb)",
                opacity: 0.9,
              }}
              onClick={() => navigate("/about-me")}>
              <chakra.span> من انا ؟ </chakra.span>
            </chakra.button>
          </HStack>
        </Stack>
        <Box ml={{ base: 0, md: 5 }} pos="relative">
          <DottedBox w="200px" h="100%" />
          <Image
            w="100%"
            h="100%"
            minW={{ base: "auto", md: "50rem" }}
            objectFit="cover"
            rounded="lg"
            fallback={<Skeleton />}
          />
        </Box>
      </Stack>
    </Container>
  );
};

function DottedBox() {
  return (
    <Box
      position="absolute"
      left="-45px"
      top="-30px"
      height="full"
      maxW="700px"
      zIndex={-1}>
      <svg
        color={useColorModeValue("rgba(55,65,81, 0.1)", "rgba(55,65,81, 0.7)")}
        width="350"
        height="420"
        fill="none">
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"></rect>
      </svg>
    </Box>
  );
}

export default HeroSection;
