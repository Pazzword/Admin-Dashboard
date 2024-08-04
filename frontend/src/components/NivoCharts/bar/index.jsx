import { Box } from "@mui/material";
import Header from "../../../components/Header";
import BarChart from "../../../pages/BarChart";

const Bar = () => {
  return (
    <Box width={1000}>
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;