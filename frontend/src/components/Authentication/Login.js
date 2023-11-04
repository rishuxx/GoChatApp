import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useState } from "react";
import axios from "axios";
import { Icon, useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { ChatState } from "../../Context/ChatProvider";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { setUser } = ChatState();

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );

      toast({
        title: "Login Successful",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "bottom",
      });
      setUser(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/chats");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <VStack
      position="relative"
      top="50px"
      spacing={{ base: "29px", md: "50px" }}
      color={"white"}
    >
      <FormControl id="email" isRequired>
        <FormLabel fontSize={{ base: "15px", md: "md" }}>
          Email Address
        </FormLabel>
        <Input
          value={email}
          type="email"
          placeholder="Email "
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel fontSize={{ base: "15px", md: "md" }}>Password</FormLabel>
        <InputGroup size="md">
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={show ? "text" : "password"}
            placeholder="Password"
          />
          <InputRightElement width="4.5rem">
            {""}
            <button h="1.75rem" size="sm" onClick={handleClick}>
              <Icon as={show ? FiEye : FiEyeOff} />
            </button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        position={"relative"}
        top={{ base: "1", md: "5" }}
        as="button"
        p={5}
        color="white"
        fontWeight="bold"
        borderRadius="md"
        bgGradient="linear(to-r, #662D8C,#ED1E79)"
        _hover={{
          bgGradient: "linear(to-r,#8e2de2, #4a00e0)",
        }}
        width="100%"
        style={{ marginTop: 50 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Login
      </Button>
      <Button
        variant="ghost"
        colorScheme="red"
        width="100%"
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Guest User
      </Button>
    </VStack>
  );
};

export default Login;
