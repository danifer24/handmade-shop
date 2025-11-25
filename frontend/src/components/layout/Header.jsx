import { Box, Flex, Text, Button, HStack, Icon, Heading, useDisclosure, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Menu, MenuButton, MenuItem, MenuList, Avatar, Badge } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { MdOutlinePersonOutline } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/userSlice";
import { selectTotalQuantity } from "../../store/cartSlice";


export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLoggedIn, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <Box as="header" bg="brand.500" color="white" px={6} py={4} boxShadow="md">
      <Flex justify="space-between" align="center">
        <Heading size="md"><NavLink to="/">Handmade Shop</NavLink></Heading>

        <IconButton
          aria-label="Open Menu"
          icon={<RxHamburgerMenu />}
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="ghost"
          color="white"
          fontSize="24px"
          transition="transform 0.15s ease"
          _hover={{ transform: "rotate(10deg)" }}
        />

        <HStack spacing={3} display={{ base: "none", md: "flex" }} pr={10}>
          <Button variant={"ghost"} p={0}>
            <Icon
              as={IoIosSearch}
              boxSize={7}
              _hover={{ transform: "scale(1.15)" }}
              transition="0.15s"
            />
          </Button>
          {/* {isLoggedIn ? (
            <span>Hola, {user.name}</span>
          ) : (<Button as={NavLink} to={"/login"} variant={"ghost"} p={0}>
            <Icon
              as={MdOutlinePersonOutline}
              boxSize={7}
              _hover={{ transform: "scale(1.15)" }}
              transition="0.15s"
            />
          </Button>)} */}
          {isLoggedIn ? (
            <Menu>
              <MenuButton as={Button} variant="ghost" px={2} _hover={{ bg: "white", transform: "scale(1.05)" }}
                transition="all 0.2s ease">
                <HStack spacing={2}>
                  <Avatar size="sm" name={user.name} />
                  <span>{user.name}</span>
                </HStack>
              </MenuButton>
              <MenuList color="black">
                <MenuItem>Perfil</MenuItem>
                <MenuItem>Mis pedidos</MenuItem>
                <MenuItem onClick={() => dispatch(logout())}>Cerrar sesión</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Button as={NavLink} to={"/login"} variant={"ghost"} p={0}>
              <Icon
                as={MdOutlinePersonOutline}
                boxSize={7}
                _hover={{ transform: "scale(1.15)" }}
                transition="0.15s"
              />
            </Button>
          )}
          <Button as={NavLink} to={"/cart"} variant={"ghost"} p={0}>
            <Icon
              as={IoCartOutline}
              boxSize={7}
              _hover={{ transform: "scale(1.15)" }}
              transition="0.15s"
            />
            {totalQuantity > 0 && (
              <Badge
                position="absolute"
                top="-6px"
                right="-6px"
                bg="red.500"
                color="white"
                borderRadius="full"
                fontSize="0.7rem"
                px={2}
              >
                {totalQuantity}
              </Badge>
            )}
          </Button>
        </HStack>
      </Flex>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          bg="brand.500"
          color="white"
          transition="all 0.1s ease"
          transform={isOpen ? "translateX(0)" : "translateX(100%)"}
        >
          <DrawerHeader borderBottomWidth="1px">Menú</DrawerHeader>
          <DrawerBody mt={4} display="flex" flexDirection="column" gap={4}>
            {isLoggedIn ? (
              <Menu>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  justifyContent="flex-start"
                  _hover={{ bg: "white", transform: "scale(1.03)" }}
                  transition="all 0.2s ease"
                  px={2}
                >
                  <HStack spacing={2}>
                    <Avatar size="sm" name={user.name} />
                    <span>{user.name}</span>
                  </HStack>
                </MenuButton>
                <MenuList color="black">
                  <MenuItem>Perfil</MenuItem>
                  <MenuItem>Mis pedidos</MenuItem>
                  <MenuItem onClick={() => dispatch(logout())}>Cerrar sesión</MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Box
                _hover={{ color: "yellow.300", transform: "scale(1.05)" }}
                transition="all 0.2s ease"
              >
                <NavLink to="/login" onClick={onClose}>Login</NavLink>
              </Box>)}
            <Box
              _hover={{ color: "yellow.300", transform: "scale(1.05)" }}
              transition="all 0.2s ease"
            >
              <NavLink to="/cart" onClick={onClose}>Carrito</NavLink>
            </Box>
            <Box
              _hover={{ color: "yellow.300", transform: "scale(1.05)" }}
              transition="all 0.2s ease"
            >
              <NavLink to="/search" onClick={onClose}>Buscar</NavLink>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

    </Box>
  );
}
