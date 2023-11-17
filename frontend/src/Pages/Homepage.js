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
import AnimatedCursor from "react-animated-cursor";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="500px" centerContent>
      <AnimatedCursor
        innerSize={7}
        outerSize={15}
        color="255, 5, 118"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={4}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Box
        className="mbox"
        d="flex"
        justifyContent="center"
        p={{ base: 1, md: 5 }} // Adjust padding for mobile (base) and larger screens (md)
        w={{ base: "98%", md: "500px" }} // Adjust width for mobile (base) and larger screens (md)
        h="100%"
        m={{ base: "20px 0 20px 0", md: "120px 0 50px 0" }}
        borderRadius={"15px"}
        borderWidth={"1px"}
        backdropFilter="blur(5px)"
        background={{ base: "", md: "transparent" }}
      >
        <Text
          fontSize={{ base: "2xl", md: "3xl" }}
          position={"relative"}
          top={{ base: "20px", md: "1" }}
          fontFamily="Poppins"
          textAlign="center"
          color={"white"}
        >
          {" "}
          GoChat{" "}
          <Tabs
            position={"relative"}
            top={"2px"}
            size="md"
            p={{ base: 5, md: 10 }}
            variant="soft-rounded"
            colorScheme="pink"
          >
            {" "}
            {/*p={{ base: 4, md: 10 }} */}
            <TabList position={"relative"} top={{ base: "1px", md: "1" }}>
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
      <Text
        position={"fixed"}
        top={"800px"}
        left={"130px"}
        fontSize={{ base: "15px", md: "25px", lg: "40px" }}
        pb={3}
        fontFamily="Poppins"
        color="white"
        _hover={{ animation: "shake 0.2s ease infinite" }}
      >
        GoChat
      </Text>
      <Text
        position={"fixed"}
        top={"850px"}
        left={"130px"}
        fontSize={{ base: "12px", md: "15px", lg: "18px" }} // Adjust the size for the second line
        fontFamily="Poppins"
        color="white"
      >
        Developed by Rishu
      </Text>
    </Container>
  );
}

export default Homepage;
