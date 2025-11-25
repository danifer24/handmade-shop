import { Box, Image, Heading, Text, VStack, useToast, Button, HStack, IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const toast = useToast();
  const MotionButton = motion.create(Button);
  const [quantity, setQuantity] = useState(1);

  const product = useSelector((state) =>
    state.products.find((p) => p.id === parseInt(id))
  );

  if (!product) return <Text>Producto no encontrado</Text>;

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAdd = () => {
    dispatch(addToCart({ ...product, quantity }));
    toast({
      title: `${quantity} x ${product.name} añadido(s) al carrito 🛒`,
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <Box p={8} maxW="800px" mx="auto">
      <VStack spacing={6} align="start">
        <Image
          src={product.image}
          alt={product.name}
          borderRadius="xl"
          objectFit="cover"
          w="100%"
          maxH="400px"
        />

        <Heading>{product.name}</Heading>
        <Text fontSize="xl" color="brand.500">{product.price} €</Text>
        <Text>{product.description}</Text>

        <HStack spacing={4}>
          <IconButton
            icon={<AiOutlineMinus />}
            size="sm"
            onClick={decrement}
            aria-label="Disminuir cantidad"
          />
          <Text fontSize="lg" fontWeight="bold">{quantity}</Text>
          <IconButton
            icon={<AiOutlinePlus />}
            size="sm"
            onClick={increment}
            aria-label="Aumentar cantidad"
          />
        </HStack>

        <MotionButton
          colorScheme="brand"
          size="lg"
          w="100%"
          onClick={handleAdd}
          whileTap={{ scale: 1.1 }}
          _hover={{ transform: "scale(1.05)" }}
        >
          Añadir al carrito
        </MotionButton>
      </VStack>
    </Box>
  );
}
