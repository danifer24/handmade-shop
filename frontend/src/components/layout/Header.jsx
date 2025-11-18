import { Box, Flex, Text, Button } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box bg="brand.500" color="white" px={6} py={4} boxShadow="md">
      <Flex justify="space-between" align="center">
        <Text fontSize="xl" fontWeight="bold">
          Handmade Shop
        </Text>

        <Flex gap={4}>
          <Button variant="ghost" color="white">Productos</Button>
          <Button variant="ghost" color="white">Sobre Nosotros</Button>
          <Button variant="outline" color="white" borderColor="white">
            Login
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
