import { Box, Flex, Text, Button, HStack, Icon, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { MdOutlinePersonOutline } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";


export default function Header() {
  return (
    <Box as="header" bg="brand.500" color="white" px={6} py={4} boxShadow="md">
      <Flex justify="space-between" align="center">
        <Heading size="md"><NavLink to="/">Handmade Shop</NavLink></Heading>

        <HStack spacing={3} display={{ md: "flex" }} pr={10}>
          <Button variant={"ghost"} p={0}>
            <Icon
              as={IoIosSearch}
              boxSize={7}
              _hover={{ transform: "scale(1.15)" }}
              transition="0.15s"
            />
          </Button>
          <Button as={NavLink} to={"/login"} variant={"ghost"} p={0}>
            <Icon
              as={MdOutlinePersonOutline}
              boxSize={7}
              _hover={{ transform: "scale(1.15)" }}
              transition="0.15s"
            />
          </Button>
          <Button as={NavLink} to={"/cart"} variant={"ghost"} p={0}>
            <Icon
              as={IoCartOutline}
              boxSize={7}
              _hover={{ transform: "scale(1.15)" }}
              transition="0.15s"
            />
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}
