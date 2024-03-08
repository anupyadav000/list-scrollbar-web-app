import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";

function Session(props) {
  const session = props.session;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"flex-start"}
      backgroundColor={"#FFFFFF"}
      borderRadius={"10px"}
      marginRight={"5%"}
      minWidth={"300px"}
      maxWidth={"500px"}
      flexShrink={"0"}
      color={"#000000"}
    >
      <Box padding={"5%"}>
        <Image src={session.image} alt="Session Pic"></Image>
      </Box>
      <Box padding={"0% 5%"}>
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          {session.topic}
        </Text>
      </Box>
      <Box padding={"5% 5%"} display={"flex"} flexDirection={"row"}>
        <Image
          src={session.hostPic}
          alt="host-pic"
          height={"100%"}
          width={"12%"}
          borderRadius={"100%"}
        ></Image>
        <Box display={"flex"} flexDirection={"column"} marginLeft={"2%"}>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            {session.hostName}
          </Text>
          <Text fontSize={"medium"} fontWeight={"light"}>
            {session.hostTag}
          </Text>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        padding={"1% 5%"}
        paddingBottom={"5%"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box display={"flex"} flexDirection={"row"}>
          <Text>{session.dateTime}</Text>
          <Text fontSize={"small"}>{session.refTime}</Text>
        </Box>
        <Button colorScheme="purple" padding={"5% 10%"}>
          {session.toDo}
        </Button>
      </Box>
    </Box>
  );
}

export default Session;
