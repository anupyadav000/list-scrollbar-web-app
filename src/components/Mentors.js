import { Box, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import Mentor from "./Mentor";
import "../App.css";

function Mentors() {
  const Mentors = [
    {
      mentorPic:
        "https://firebasestorage.googleapis.com/v0/b/preplaced-upload-prod/o/image%2Fmentor-profile%2Fmani%20soni0.5181413711813161?alt=media&token=4fe01c14-0d7f-4081-9a54-f8164c2d7978",
      mentorName: "mani soni",
      companyPic:
        "https://firebasestorage.googleapis.com/v0/b/preplaced-upload-prod/o/image%2Fcomapny-logos%2FSlikSafe?alt=media&token=df67ded0-5eee-42eb-8566-20f9fd9db8c7",
      jobProfile: "Founding Engineer",
      companyName: "SlikSafe",
      tags: [
        "Java",
        "Python",
        "C++",
        "C",
        "APIs",
        "Databases",
        "Data Structures",
        "Algorithms",
        "Problem Solving",
        "System Design",
        "Object Oriented Programming",
        "Web Development",
      ],
      planCost: "25000",
      toDo: "View Profile",
    },
    {
      mentorPic:
        "https://firebasestorage.googleapis.com/v0/b/preplaced-upload-prod/o/image%2Fmentor-profile%2Fmani%20soni0.5181413711813161?alt=media&token=4fe01c14-0d7f-4081-9a54-f8164c2d7978",
      mentorName: "mani soni",
      companyPic:
        "https://firebasestorage.googleapis.com/v0/b/preplaced-upload-prod/o/image%2Fcomapny-logos%2FSlikSafe?alt=media&token=df67ded0-5eee-42eb-8566-20f9fd9db8c7",
      jobProfile: "Founding Engineer",
      companyName: "SlikSafe",
      tags: [
        "Java",
        "Python",
        "C++",
        "C",
        "APIs",
        "Databases",
        "Data Structures",
        "Algorithms",
        "Problem Solving",
        "System Design",
        "Object Oriented Programming",
        "Web Development",
      ],
      planCost: "25000",
      toDo: "View Profile",
    },
    {
      mentorPic:
        "https://firebasestorage.googleapis.com/v0/b/preplaced-upload-prod/o/image%2Fmentor-profile%2Fmani%20soni0.5181413711813161?alt=media&token=4fe01c14-0d7f-4081-9a54-f8164c2d7978",
      mentorName: "mani soni",
      companyPic:
        "https://firebasestorage.googleapis.com/v0/b/preplaced-upload-prod/o/image%2Fcomapny-logos%2FSlikSafe?alt=media&token=df67ded0-5eee-42eb-8566-20f9fd9db8c7",
      jobProfile: "Founding Engineer",
      companyName: "SlikSafe",
      tags: [
        "Java",
        "Python",
        "C++",
        "C",
        "APIs",
        "Databases",
        "Data Structures",
        "Algorithms",
        "Problem Solving",
        "System Design",
        "Object Oriented Programming",
        "Web Development",
      ],
      planCost: "25000",
      toDo: "View Profile",
    },
    {
      mentorPic:
        "https://firebasestorage.googleapis.com/v0/b/preplaced-upload-prod/o/image%2Fmentor-profile%2Fmani%20soni0.5181413711813161?alt=media&token=4fe01c14-0d7f-4081-9a54-f8164c2d7978",
      mentorName: "mani soni",
      companyPic:
        "https://firebasestorage.googleapis.com/v0/b/preplaced-upload-prod/o/image%2Fcomapny-logos%2FSlikSafe?alt=media&token=df67ded0-5eee-42eb-8566-20f9fd9db8c7",
      jobProfile: "Founding Engineer",
      companyName: "SlikSafe",
      tags: [
        "Java",
        "Python",
        "C++",
        "C",
        "APIs",
        "Databases",
        "Data Structures",
        "Algorithms",
        "Problem Solving",
        "System Design",
        "Object Oriented Programming",
        "Web Development",
      ],
      planCost: "25000",
      toDo: "View Profile",
    },
  ];

  const containerRef = useRef(null);

  return (
    <Box
      backgroundColor={"#FFFFFF"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"flex-start"}
      paddingLeft={"20%"}
      paddingRight={"20%"}
      paddingTop={"20%"}
      paddingBottom={"20%"}
      color={"#000000"}
    >
      <Box>
        <Text fontSize={"4xl"} fontWeight={"extrabold"}>
          Other Fullstack Developer Mentors
        </Text>
        <button
          className="scroll-button"
          onClick={() => (containerRef.current.scrollLeft -= 100)}
        >
          Left
        </button>
        <button
          className="scroll-button"
          onClick={() => (containerRef.current.scrollLeft += 100)}
        >
          Right
        </button>
      </Box>
      <Box display={"flex"} marginTop={"10%"} overflowX={"scroll"}>
        <Box
          display={"flex"}
          flexDirection={"row"}
          backgroundColor={"#FFFFFF"}
          marginBottom={"5%"}
          id="wrapper"
          class="wrapper"
          ref={containerRef}
        >
          {Mentors.map((mentor, ind) => {
            return <Mentor mentor={mentor} key={ind} />;
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Mentors;
