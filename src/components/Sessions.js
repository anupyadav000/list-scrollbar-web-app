import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Session from "./Session";
import "../App.css";

function Sessions() {
  const Sessions = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/preplaced-upload-prod/o/image%2Fgroup-sessions%2F5-mistakes-that-are-42?alt=media&token=39885be9-d6cb-4ca3-a153-639ed004950c",
      topic: "5 mistakes that are running your tech carrer",
      hostPic:
        "https://firebasestorage.googleapis.com/v0/b/preplaced-upload-prod/o/image%2Fmentor-profile%2FSidharth%20Sahoo0.21936256415835054?alt=media&token=2430dc4a-03a5-49cf-acc9-534b1cfcb4b5",
      hostName: "Sidharth Sahoo",
      hostTag: "Co-found and CTO, Enitiate",
      dateTime: "July 29, 18:00",
      refTime: "(GMT +5:30)",
      toDo: "Register",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/preplaced-upload-prod/o/image%2Fgroup-sessions%2F5-mistakes-that-are-42?alt=media&token=39885be9-d6cb-4ca3-a153-639ed004950c",
      topic: "5 mistakes that are running your tech carrer",
      hostPic:
        "https://firebasestorage.googleapis.com/v0/b/preplaced-upload-prod/o/image%2Fmentor-profile%2FSidharth%20Sahoo0.21936256415835054?alt=media&token=2430dc4a-03a5-49cf-acc9-534b1cfcb4b5",
      hostName: "Sidharth Sahoo",
      hostTag: "Co-found and CTO, Enitiate",
      dateTime: "July 29, 18:00",
      refTime: "(GMT +5:30)",
      toDo: "Register",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/preplaced-upload-prod/o/image%2Fgroup-sessions%2F5-mistakes-that-are-42?alt=media&token=39885be9-d6cb-4ca3-a153-639ed004950c",
      topic: "5 mistakes that are running your tech carrer",
      hostPic:
        "https://firebasestorage.googleapis.com/v0/b/preplaced-upload-prod/o/image%2Fmentor-profile%2FSidharth%20Sahoo0.21936256415835054?alt=media&token=2430dc4a-03a5-49cf-acc9-534b1cfcb4b5",
      hostName: "Sidharth Sahoo",
      hostTag: "Co-found and CTO, Enitiate",
      dateTime: "July 29, 18:00",
      refTime: "(GMT +5:30)",
      toDo: "Register",
    },
  ];
  return (
    <Box
      backgroundColor={"#0E0E0E"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"flex-start"}
      paddingLeft={"20%"}
      paddingRight={"20%"}
      paddingTop={"20%"}
      paddingBottom={"20%"}
      color={"#FFFFFF"}
    >
      <Box>
        <Text fontSize={"4xl"} fontWeight={"extrabold"}>
          Upcoming Group Sessions
        </Text>
      </Box>
      <Box
        display={"flex"}
        overflowX={"scroll"}
        marginTop={"5%"}
        className="flex-container"
      >
        <Box
          display={"flex"}
          flexDirection={"row"}
          backgroundColor={"#0E0E0E"}
          marginBottom={"5%"}
        >
          {Sessions.map((session) => {
            return <Session session={session} />;
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Sessions;
