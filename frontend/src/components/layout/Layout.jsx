import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Box maxW="1200px" mx="auto" px={4} py={6}>
        {children}
      </Box>
      <Footer />
    </>
  );
}
