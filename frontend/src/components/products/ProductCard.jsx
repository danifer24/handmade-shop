import { Box, Image, Text, Flex, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { id, name, price, image } = product;
  const dispatch = useDispatch();

  const handlerAdd = () => {
    dispatch(addToCart(product));
  }

  return (
    <Box
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      p={4}
      transition="0.2s"
      _hover={{ transform: "scale(1.03)", boxShadow: "xl" }}
      onClick={() => navigate(`/product/${id}`)}
      cursor="pointer"
    >
      <Image
        src={image}
        alt={name}
        borderRadius="md"
        mb={3}
        objectFit="cover"
        h="200px"
        w="100%"
      />

      <Text fontSize="lg" fontWeight="bold" mb={1}>
        {name}
      </Text>

      <Flex justify="space-between" align="center">
        <Text fontSize="md" color="brand.600">
          {price} €
        </Text>

        <Button size="sm" colorScheme="brand" variant="solid" onClick={() => handlerAdd()}>
          Añadir al carrito
        </Button>
      </Flex>
    </Box>
  );
}
