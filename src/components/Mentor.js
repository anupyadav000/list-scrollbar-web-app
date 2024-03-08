import { Box, Button, Image, Tag, Text } from "@chakra-ui/react";
import React from "react";
import "../App.css";

function Mentor(props) {
  const mentor = props.mentor;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"flex-start"}
      boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
      backgroundColor={"#FFFFFF"}
      borderRadius={"10px"}
      marginRight={"5%"}
      minWidth={"400px"}
      maxWidth={"500px"}
      flexShrink={"0"}
      color={"#000000"}
      border={"1px solid #000000"}
    >
      <Box padding={"5%"} height={"200px"}>
        <Image
          src={mentor.mentorPic}
          alt="Mentor Pic"
          borderRadius={"20px"}
          height={"80%"}
        ></Image>
        <Text fontSize={"4xl"} fontWeight={"bold"} marginTop={"10px"}>
          {mentor.mentorName}
        </Text>
      </Box>
      <Box padding={"5% 5%"} display={"flex"} flexDirection={"row"}>
        <Image
          src={mentor.companyPic}
          alt="company-pic"
          height={"90%"}
          width={"10%"}
          borderRadius={"100%"}
        ></Image>
        <Box display={"flex"} flexDirection={"column"} marginLeft={"2%"}>
          <Text fontSize={"medium"} fontWeight={"medium"}>
            {mentor.jobProfile}
          </Text>
          <Text fontSize={"medium"} fontWeight={"bold"}>
            {mentor.companyName}
          </Text>
        </Box>
      </Box>
      <Box
        padding={"1% 2%"}
        paddingBottom={"5%"}
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
      >
        {mentor.tags.map((tag, ind) => {
          return (
            <Tag size={"md"} backgroundColor={"#F5F5F0"} margin={"5px"}>
              {tag}
            </Tag>
          );
        })}
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
          <Text fontSize={"3xl"} fontWeight={"bold"}>
            ₹{mentor.planCost}
          </Text>
          <Text fontSize={"3xl"}>/month</Text>
        </Box>
        <Button
          colorScheme="gray"
          padding={"5% 10%"}
          _hover={{ bg: "black", color: "white" }}
        >
          {mentor.toDo}
        </Button>
      </Box>
    </Box>
  );
}

export default Mentor;
