import { useSelector, useDispatch } from "react-redux";
import { Box, Heading, VStack, Text, Button, HStack, Image } from "@chakra-ui/react";
import { removeItem } from "../store/cartSlice";

export default function CartPage() {
    const { items } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const total = items.reduce((acc, item) => acc + item.price, 0);

    if (items.length === 0) {
        return (
            <Box p={6}>
                <Heading size="lg">Tu carrito está vacío</Heading>
                <Text mt={2}>Añade productos para continuar.</Text>
            </Box>
        );
    }

    return (
        <Box p={6}>
            <Heading mb={4}>Tu Carrito</Heading>

            <VStack align="stretch" spacing={4}>
                {items.map((item) => (
                    <HStack
                        key={item.id}
                        p={4}
                        bg="white"
                        boxShadow="md"
                        borderRadius="lg"
                    >
                        <Image src={item.image} alt={item.name} boxSize="80px" borderRadius="md" />

                        <Box flex={1}>
                            <Text fontWeight="bold">{item.name}</Text>
                            <Text color="gray.500">{item.price}€</Text>
                        </Box>

                        <Button
                            colorScheme="red"
                            variant="outline"
                            size="sm"
                            onClick={() => dispatch(removeItem(item.id))}
                        >
                            Eliminar
                        </Button>
                    </HStack>
                ))}
            </VStack>

            <Heading size="md" mt={6}>Total: {total}€</Heading>

            <Button colorScheme="brand" mt={4} w="100%">
                Proceder al Pago
            </Button>
        </Box>
    );
}