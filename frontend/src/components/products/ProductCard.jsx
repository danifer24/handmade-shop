import { Box, Image, Text, Flex, VStack, Button, HStack, IconButton, useToast } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const toast = useToast();
  const [quantity, setQuantity] = useState(1);

  const { id, name, price, image } = product;
  const MotionButton = motion.create(Button);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAdd = () => {
    dispatch(addToCart({ ...product, quantity }));
    toast({
      title: `${quantity} x ${name} añadido(s) al carrito 🛒`,
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <Box
      bg="white"
      borderRadius="xl"
      boxShadow="md"
      p={4}
      transition="0.2s"
      _hover={{ transform: "scale(1.03)", boxShadow: "xl" }}
    >
      <Link to={`/product/${id}`}>
        <VStack spacing={2} align="start">
          <Image
            src={image}
            alt={name}
            borderRadius="lg"
            objectFit="cover"
            w="100%"
            h="200px"
          />
          <Text fontSize="lg" fontWeight="bold" noOfLines={1}>
            {name}
          </Text>
        </VStack>
      </Link>

      <Text fontSize="md" color="brand.600" fontWeight="semibold" mt={2}>
        {price} €
      </Text>

      <HStack spacing={2} mt={2}>
        <IconButton
          icon={<AiOutlineMinus />}
          size="xs"
          onClick={decrement}
          aria-label="Disminuir cantidad"
        />
        <Text>{quantity}</Text>
        <IconButton
          icon={<AiOutlinePlus />}
          size="xs"
          onClick={increment}
          aria-label="Aumentar cantidad"
        />
      </HStack>

      <MotionButton
        size="sm"
        colorScheme="brand"
        mt={2}
        w="100%"
        onClick={handleAdd}
        whileTap={{ scale: 1.2 }}
        _hover={{ transform: "scale(1.05)" }}
      >
        Añadir al carrito
      </MotionButton>
    </Box>
  );
}
