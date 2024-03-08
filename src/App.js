import { Box } from "@chakra-ui/react";
import "./App.css";
import Mentors from "./components/Mentors";
import Sessions from "./components/Sessions";

function App() {
  return <Box>
    <Mentors></Mentors>
    <Sessions></Sessions>
  </Box>;
}

export default App;
