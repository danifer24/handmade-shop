import { useParams } from "react-router-dom";

const mockProducts = [
  {
    id: "1",
    name: "Vela artesanal",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5",
    description:
      "Vela hecha a mano con cera natural y aroma a lavanda. Perfecta para decoración y relajación.",
  },
  {
    id: "2",
    name: "Taza pintada a mano",
    price: 18.5,
    image: "https://images.unsplash.com/photo-1526401281623-359b4bf71a5b",
    description:
      "Taza de cerámica pintada artesanalmente. Ideal para café, té o como regalo.",
  },
];

export default function ProductPage() {
    const { id } = useParams();
    const product = mockProducts.find((p) => p.id === id);

    if(!product) return <Text>Producto no encontrado</Text>

    return (
    <Flex
      direction={{ base: "column", md: "row" }}
      p={6}
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      gap={6}
    >
      <Image
        src={product.image}
        alt={product.name}
        borderRadius="md"
        objectFit="cover"
        maxW={{ base: "100%", md: "400px" }}
      />

      <Box>
        <Heading mb={4}>{product.name}</Heading>
        <Text fontSize="xl" color="brand.600" mb={4}>
          {product.price} €
        </Text>
        <Text mb={6}>{product.description}</Text>
        <Button colorScheme="brand" size="lg">
          Añadir al carrito
        </Button>
      </Box>
    </Flex>
  );
}