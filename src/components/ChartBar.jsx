import React, { useEffect, useRef } from "react";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import adminIcon from "../assets/svg/adminIcon.svg";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ChartBar() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    const config = {
      type: "bar",
      data: {
        labels: ["$23,000", "$13,000", "$25,000", "$63,000", "$23,000", "$44,000", "$21,000"],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#032658",
            borderColor: "#032658",
            data: [30, 78, 56, 34, 100, 45, 13],
            barThickness: 8,
          },
          {
            label: new Date().getFullYear() - 1,
            backgroundColor: "#4D91FF",
            borderColor: "#4D91FF",
            data: [27, 68, 86, 74, 10, 4, 87],
            barThickness: 8,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          x: {
            type: 'category',
            display: true,
          },
          y: {
            type: 'linear',
            display: true,
            beginAtZero: true,
          },
        },
      },
    };

    const myBar = new Chart(ctx, config);

    return () => {
      myBar.destroy();
    };
  }, []);

  return (
    <div className="py-[35px] px-[43px]">
      <canvas ref={canvasRef} aria-label="Bar Chart" role="img"></canvas>
    </div>
  );
}
