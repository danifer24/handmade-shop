import { useSelector, useDispatch } from "react-redux";
import {
    Box,
    Heading,
    VStack,
    Text,
    Button,
    HStack,
    Image,
    Divider,
} from "@chakra-ui/react";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../store/cartSlice";

export default function CartPage() {
    const { items } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (items.length === 0) {
        return (
            <Box p={8} textAlign="center">
                <Heading size="lg" color="brand.500">
                    Tu carrito está vacío 🧺
                </Heading>
                <Text mt={2} color="gray.600">
                    Añade productos para continuar.
                </Text>
            </Box>
        );
    }

    return (
        <Box p={8} maxW="800px" mx="auto">
            <Heading mb={6} color="brand.500">Tu Carrito</Heading>

            <VStack align="stretch" spacing={4}>
                {items.map((item) => (
                    <Box
                        key={item.id}
                        p={4}
                        bg="white"
                        borderRadius="xl"
                        boxShadow="md"
                    >
                        <HStack spacing={4}>
                            <Image
                                src={item.image}
                                alt={item.name}
                                boxSize="80px"
                                borderRadius="lg"
                                objectFit="cover"
                            />

                            <Box flex={1}>
                                <Text fontWeight="bold" fontSize="lg">{item.name}</Text>
                                <Text color="gray.500">{item.price} €</Text>
                            </Box>

                            <Button
                                colorScheme="red"
                                variant="outline"
                                size="sm"
                                onClick={() => dispatch(removeFromCart(item.id))}
                            >
                                Eliminar
                            </Button>
                            <Button size="sm" onClick={() => dispatch(decreaseQuantity(item.id))}>-</Button>

                            <Text fontWeight="bold">{item.quantity}</Text>

                            <Button size="sm" onClick={() => dispatch(increaseQuantity(item.id))}>+</Button>
                        </HStack>
                    </Box>
                ))}
            </VStack>

            <Divider my={6} />

            <HStack justify="space-between">
                <Heading size="md">Total:</Heading>
                <Heading size="md" color="brand.600">{total} €</Heading>
            </HStack>

            <Button colorScheme="brand" mt={6} size="lg" w="100%">
                Proceder al Pago
            </Button>
        </Box>
    );
}
