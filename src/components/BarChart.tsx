import { useEffect, useState } from "react";
import * as echarts from "echarts";
import { Card } from "@mantine/core";
import { ChartData, getAverageProduction } from "../data/DataStore";

const BarChart = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);

  useEffect(() => {
    const data = getAverageProduction();

    if (!data || data.length === 0) {
      console.error("Error: No data found in dataset.json");
      return;
    }

    console.log(data);
    setChartData(data);
  }, []);

  useEffect(() => {
    if (chartData.length === 0) {
      console.warn("No data available for Bar Chart");
      return;
    }

    const chartDom = document.getElementById("chart");
    if (!chartDom) {
      console.error("Chart container not found");
      return;
    }

    echarts.dispose(chartDom);
    const myChart = echarts.init(chartDom);

    const cropNames = chartData.map((d) => d.cropName);
    const avgProduction = chartData.map((d) => d.averageProduction);

    console.log("Rendering Chart with Data:", cropNames, avgProduction);

    const option = {
      title: { text: "Average Crop Production" },
      tooltip: { trigger: "axis" },
      xAxis: {
        type: "category",
        data: cropNames,
        axisLabel: { rotate: cropNames.length },
      },
      yAxis: { type: "value" },
      series: [
        {
          name: "Production",
          data: avgProduction,
          type: "bar",
          color: "#3498db",
          barWidth: "50%",
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [chartData]);

  return (
    <Card
      withBorder
      shadow="sm"
      style={{ padding: "10px", marginTop: "20px", width: "100%", height: "450px" }}
    >
      <div id="chart" style={{ width: "100%", height: "100%" }}></div>
    </Card>
  );
};

export default BarChart;
