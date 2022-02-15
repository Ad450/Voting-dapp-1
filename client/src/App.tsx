import * as React from "react";
import { ChakraProvider, Box, Heading, theme } from "@chakra-ui/react";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Heading>Hello</Heading>
    </Box>
  </ChakraProvider>
);
