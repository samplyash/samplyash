import { Table } from "@mantine/core";
import { getTableData } from "../data/DataStore";

const TableComponent = () => {
  //  Data for Testing
  const data = getTableData();


  return (

    
    <Table
      striped
      withColumnBorders
      style={{
        borderCollapse: "collapse", //  full border styling
        width: "100%",
      }}
    >
      <thead>
        <tr>
          <th style={{ border: "2px solid black", textAlign: "center" }}>Year</th>
          <th style={{ border: "2px solid black", textAlign: "center" }}>
            Crop with Maximum Production in Year
          </th>
          <th style={{ border: "2px solid black", textAlign: "center" }}>
            Crop with Minimum Production in Year
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td style={{ border: "1px solid black", textAlign: "center" }}>{row.year}</td>
            <td style={{ border: "1px solid black", textAlign: "center" }}>{row.maxProductionCropName}</td>
            <td style={{ border: "1px solid black", textAlign: "center" }}>{row.minProductionCropName}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};




export default TableComponent;
