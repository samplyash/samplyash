import { MantineProvider, Container } from "@mantine/core";
import TableComponent from "./components/DataTable";
import BarChart from "./components/BarChart";

import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <MantineProvider>
      <Container>
        <h1>Agriculture Data Visualization</h1>
        <ThemeToggle />
        <TableComponent />
        <BarChart />
      </Container>
    </MantineProvider>
  );
};

export default App;
