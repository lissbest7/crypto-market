import { Doughnut } from "react-chartjs-2";
import { useEffect } from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

// Register necessary components
Chart.register(ArcElement, Tooltip, Legend);

function DoughnutChart() {
  const data = {
    labels: ["BTC", "ETH", "ADA", "Others"],
    datasets: [
      {
        label: "Attendance for Week 1",
        data: [25, 24, 25, 25],
        backgroundColor: [
          "#4D91FF",
          "#002D67",
          "#00DCF8",
          "rgba(153,102,255,1)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        align: "center",
        position: "bottom",
      },
      title: {
        display: true,
        text: "Doughnut Chart",
        color: "blue",
        font: {
          size: 34,
        },
        padding: {
          top: 30,
          bottom: 30,
        },
      },
    },
  };

  return (
    <div style={{ width: "300px", margin: "0 auto" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default DoughnutChart;
