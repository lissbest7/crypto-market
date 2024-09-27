// src/pages/AllCoins.jsx

import React from "react";
import Table from "../components/Table";
import { allCoins } from '../data/currencyData'; 
import { useNavigate } from "react-router-dom";
import { table } from "framer-motion/client";

const AllCoins = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">All Coins</h1>
      <div className='w-full h-[calc(100vh-100px)] overflow-auto custom-scrollbar'>
        <Table data={allCoins} />
      </div>
    </div>
  );
};

export default AllCoins;
