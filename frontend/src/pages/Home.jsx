import { SimpleGrid, Heading, Box, VStack, Button, Image, Text } from "@chakra-ui/react";
import ProductCard from "../components/products/ProductCard";
import { useSelector } from "react-redux";


export default function Home() {
  const products = useSelector((state) => state.products)

  const handleAddToCart = (product) => {
    console.log("Añadir al carrito:", product);
    // Aquí luego haremos dispatch al slice del carrito
  };

  return (
    <Box p={6}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={handleAddToCart}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
