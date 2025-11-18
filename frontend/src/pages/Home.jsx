import { SimpleGrid, Heading } from "@chakra-ui/react";
import ProductCard from "../components/products/ProductCard";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Vela artesanal",
      price: 12.99,
      image: "https://content.revistainteriores.es/medio/2025/06/15/descubre-como-hacer-tus-propias-velas-aromaticas-de-forma-facil_bd59195c_250615154726_1280x794.webp",
    },
    {
      id: 2,
      name: "Taza pintada a mano",
      price: 18.5,
      image: "https://www.artesanum.com/content/upi/1/31621/4/6764a4ed2fb843de.jpg",
    },
    {
      id: 3,
      name: "Caja de madera decorada",
      price: 25.0,
      image: "https://casajovenonline.com/92392-large_default/caja-pna-mano-fatima-rectangular-.jpg",
    },
    {
      id: 4,
      name: "Cuaderno artesanal",
      price: 15.0,
      image: "https://www.miamandarina.es/30341-thickbox_default/cuaderno-atacama-lamali.jpg",
    },
    {
      id: 5,
      name: "Bolso de tela pintado",
      price: 32.0,
      image: "https://www.comopezenelagua.es/wordpress/wp-content/uploads/2022/03/pieza-bolsa-primavera-2022-01-1140x644.jpg",
    },
  ];

  return (
    <>
      <Heading mb={6}>Productos destacados</Heading>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
        {products.map((p) => (
          <ProductCard
            key={p.id}
            name={p.name}
            price={p.price}
            image={p.image}
          />
        ))}
      </SimpleGrid>
    </>
  );
}
