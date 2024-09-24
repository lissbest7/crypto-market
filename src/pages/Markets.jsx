import React, { useState } from 'react';

function Markets() {
  const marketData = [
    { name: "BTC/USDT", price: "$23,738", change: "+14.67%", details: "Market cap: $450 billion" },
    { name: "ETH/USDT", price: "$1,600", change: "-3.45%", details: "Market cap: $200 billion" },
    { name: "LTC/USDT", price: "$85.25", change: "+2.10%", details: "Market cap: $5 billion" },
    { name: "XRP/USDT", price: "$0.50", change: "+1.20%", details: "Market cap: $25 billion" },
  ];

  const [openDetails, setOpenDetails] = useState(null);

  const toggleDetails = (index) => {
    setOpenDetails(openDetails === index ? null : index);
  };

  return (
    <div className='py-6 px-4 md:px-8 lg:px-12'>
      <h2 className="text-black dark:text-white text-2xl font-semibold mb-4">Markets</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="py-2 text-left px-4">Pair</th>
              <th className="py-2 text-right px-4">Price</th>
              <th className="py-2 text-right px-4">Change</th>
              <th className="py-2 text-right px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {marketData.map((market, index) => (
              <React.Fragment key={index}>
                <tr className="hover:bg-gray-100 dark:hover:bg-gray-600">
                  <td className="py-2 px-4">{market.name}</td>
                  <td className="py-2 px-4 text-right">{market.price}</td>
                  <td className={`py-2 px-4 text-right ${market.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {market.change}
                  </td>
                  <td className="py-2 px-4 text-right">
                    <button 
                      onClick={() => toggleDetails(index)} 
                      className="text-blue-500 hover:underline"
                    >
                      {openDetails === index ? "Hide" : "Show Details"}
                    </button>
                  </td>
                </tr>
                {openDetails === index && (
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <td colSpan="4" className="py-2 px-4">
                      <p>{market.details}</p>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Markets;
