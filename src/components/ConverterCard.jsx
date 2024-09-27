import React, { useState } from "react";
import DropBtn from "./DropBtn.jsx";
import CustomDropdown from "./CustomDropdown";
import adminIcon from "../assets/svg/adminIcon.svg";
import CustomBtn from "./CustomBtn";

function ConverterCard() {
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");

  const conversionRate = 66363.20; 

  const handleConvert = () => {
    const usdAmount = parseFloat(amount);
    if (!isNaN(usdAmount)) {
      const btcAmount = (usdAmount / conversionRate).toFixed(6);
      setConvertedAmount(btcAmount);
    } else {
      setConvertedAmount(""); 
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-[#000000] dark:text-[#FFF] text-[20px] font-semibold leading-[28px]">
          Convert (USD to BTC)
        </p>
        <div>
          <CustomDropdown
            buttonContent={<DropBtn />}
            menuItems={[
              { label: "USD", image: adminIcon },
              { label: "BTC", image: adminIcon }
            ]}
          />
        </div>
      </div>
      <div className="mt-4">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="relative border dark:border-[#292A32] border-[#E7EAEB] rounded-[7px]">
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="100"
              className="w-full text-[15px] font-normal leading-[10px] py-[15px] pl-[17px] pr-[6.5rem] text-[#626D7D] dark:text-white rounded-[7px] outline-none bg-gray-50 dark:bg-[#1C1C25] focus:bg-white focus:border-[#2F80ED]"
            />
          </div>

          <div className="relative mt-[21px] border dark:border-[#292A32] border-[#E7EAEB] rounded-[7px]">
            <input
              type="text"
              value={convertedAmount}
              readOnly
              placeholder="0.044"
              className="w-full text-[15px] font-normal leading-[10px] py-[15px] pl-[17px] pr-[6.5rem] rounded-[7px] text-[#626D7D] dark:text-white outline-none bg-gray-50 dark:bg-[#1C1C25] focus:bg-white focus:border-[#2F80ED]"
            />
          </div>

          <div>
            <div className="text-center mt-[14px]">
              <CustomBtn
                onClick={handleConvert}
                bgColor="#4D91FF"
                textColor="#FFF"
                label="Convert Now"
                Width="100%"
              />
            </div>
            <p className="text-[#626D7D] dark:text-[#626D7D] text-[11px] font-normal leading-[11px] mt-[12px] sm:w-[290px] word-break">
              The ultimate price and output is determined by the amount of tokens in the pool at the time of your swap.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ConverterCard;
