import React from "react";
import { chakra, Box, Stack, Flex, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export default function App() {
    const navigate = useNavigate();
  return (
    <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      w="full"
      alignItems="center"
      justifyContent="center">
      <Flex justify="center" bg="aliceblue" _dark={{ bg: "gray.800" }} w="full">
        <Box
          w={{ base: "full", md: "75%", lg: "50%" }}
          px={4}
          py={20}
          textAlign={{ base: "left", md: "center" }}>
          <Stack
            justifyContent={{ base: "left", md: "center" }}
            direction={{ base: "column", sm: "row" }}
            spacing={2}
            mt={2}>
            <Box display="inline-flex" rounded="md" shadow="md">
              <Link
                w="full"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                rounded="md"
                _light={{
                  color: "white",
                }}
                bg="blue.500"
                _dark={{ bg: "blue.500" }}
                _hover={{
                  bg: "blue.600",
                  _dark: { bg: "blue.600" },
                }}
                onClick={() => navigate("/about-me")}>
                من انا ؟
              </Link>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}
