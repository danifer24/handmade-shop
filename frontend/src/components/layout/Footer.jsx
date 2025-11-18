import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg="brand.600" color="white" py={4} textAlign="center" mt={10}>
      <Text fontSize="sm">© {new Date().getFullYear()} Handmade Shop</Text>
    </Box>
  );
}
