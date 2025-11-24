import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/userSlice";
import { Button } from "@chakra-ui/react";

export default function TestLogin() {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.user);

  const handleLogin = () => {
    dispatch(login({ user: { name: "Clau" }, role: "admin" }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {isLoggedIn ? (
        <>
          <span>Hola, {user.name}</span>
          <Button colorScheme="red" onClick={handleLogout}>Logout</Button>
        </>
      ) : (
        <Button colorScheme="green" onClick={handleLogin}>Login</Button>
      )}
    </div>
  );
}