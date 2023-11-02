import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  
  return (
    <Container maxW="500px" centerContent>
      <Box
        className="mbox"
        d="flex"
        justifyContent="center"
        p={8}
        w="100%"
        h="85%"
        m="80px 0 70px 0px"
        borderRadius={"15px"}
        borderWidth={"1px"}
        backdropFilter="blur(50px)"
      >
        <Text
          fontSize="3xl"
          fontFamily="Poppins"
          textAlign="center"
          color={"white"}
        >
          {" "}
          GoChat{" "}
          <Tabs p={10} variant="soft-rounded" colorScheme="purple">
            <TabList>
              <Tab width={"50%"}>Login</Tab>
              <Tab width={"50%"}>SignUp</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {" "}
                <Login />{" "}
              </TabPanel>
              <TabPanel>
                {" "}
                <Signup />{" "}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Text>
      </Box>
    </Container>
  );
};

export default Homepage;
