import React, { useEffect, useRef } from "react";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import adminIcon from "../assets/svg/adminIcon.svg";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ChartBar() {
  const canvasRef = useRef(null);

  return (
    <div className="py-[35px] px-[43px]">
      <canvas ref={canvasRef} aria-label="Bar Chart" role="img"></canvas>
    </div>
  );
}