import { useEffect, useRef } from "react";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"; // Ölçekleri ve bileşenleri içe aktarın
import CustomDropdown from "./CustomDropdown";
import adminIcon from "../assets/svg/adminIcon.svg";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend); // Gerekli ölçekleri kaydedin

export default function ChartBar() {
  const buttonContent = (
    <div>
      <svg
        width="13"
        height="8"
        viewBox="0 0 13 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.34339 7.63536L12.7204 1.77303C13.355 1.08328 12.8393 3.93217e-07 11.8762 3.93217e-07H1.12212C0.90658 -0.000175869 0.69556 0.0589098 0.514325 0.170182C0.33309 0.281454 0.189323 0.440196 0.100242 0.627397C0.0111599 0.814598 -0.0194626 1.02232 0.012044 1.2257C0.0435505 1.42907 0.13585 1.61947 0.277887 1.7741L5.65494 7.63429C5.76017 7.74916 5.88995 7.84121 6.03556 7.90429C6.18117 7.96737 6.33924 8 6.49916 8C6.65909 8 6.81716 7.96737 6.96277 7.90429C7.10838 7.84121 7.23816 7.74916 7.34339 7.63429V7.63536Z"
          fill="black"
        />
      </svg>
    </div>
  );

  const menuItems = [
    { label: "USD", href: "javascript:void(0)", image: adminIcon },
    { label: "BTC", href: "javascript:void(0)", image: adminIcon },
    { label: "FTCE", href: "javascript:void(0)", image: adminIcon },
    { label: "IN", href: "javascript:void(0)", image: adminIcon },
  ];

  const canvasRef = useRef(null);

  useEffect(() => {
    const config = {
      type: "bar",
      data: {
        labels: [
          "$23,000",
          "$13,000",
          "$25,000",
          "$63,000",
          "$23,000",
          "$44,000",
          "$21,000",
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#032658",
            borderColor: "#032658",
            data: [30, 78, 56, 34, 100, 45, 13],
            fill: false,
            barThickness: 8,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
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
            display: false,
          },
          y: {
            type: 'linear',
            display: true,
          },
        },
      },
    };

    const ctx = canvasRef.current.getContext("2d");
    const myBar = new Chart(ctx, config);

    return () => {
      myBar.destroy();
    };
  }, []);

  return (
    <div className="py-[35px] px-[43px]">
      <div className="flex flex-col min-[1601px]:flex-row justify-between items-center">
        <div className="flex justify-between items-center w-full sm:w-[334px] bg-[#626d7d0c] p-5 rounded-[12px]">
          <div>
            <p className="uppercase text-black dark:text-white text-[20px] font-semibold leading-[28px]">BTCUSDT</p>
            <p className="text-[#626D7D] text-[20px] font-semibold leading-[28px]">Bitcoin</p>
          </div>
          <div className="flex justify-between items-center gap-[15px]">
            <div>
              <p className="uppercase text-black dark:text-white text-[13px] font-medium leading-[22px]">$23,738</p>
              <span className="rounded-[60px] px-2 text-[11px] leading-[22px] font-semibold word-break text-[#219653] bg-[#2196543c]">+14.67%</span>
            </div>
            <CustomDropdown buttonContent={buttonContent} menuItems={menuItems} />
          </div>
        </div>
        <div className="flex gap-[7px] mt-3 3xl:mt-0">
          {["1H", "3H", "5H", "1D", "1W", "1M"].map((period) => (
            <span key={period} className={`text-black dark:text-white ${period === "1H" ? "text-[#0060FF] bg-[#b2daf8bb]" : "bg-[#f8f8f8] dark:bg-[#13131367]" } text-[10px] font-semibold leading-[22px] px-3 py-1 rounded`}>
              {period}
            </span>
          ))}
        </div>
      </div>
      <div className="relative mt-5">
        <canvas ref={canvasRef} id="bar-chart" aria-label="Bar Chart" role="img"></canvas>
      </div>
    </div>
  );
}
