import React from "react";
import Table from "./Table";
import { currentRateDate, gamingData, metaverseData, defiData, nftData } from '../data/currencyData';
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const navigate = useNavigate(); // useNavigate kullan

  const handleNavigate = () => {
    navigate('/all-coins'); // Yönlendirme
  };
  
  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <ul className="flex mb-0 list-none flex-wrap pt-14 sm:pt-[17px] pb-4 flex-row justify-end" role="tablist">
          <li className="-mb-px mr-2 last:mr-0 text-center pb-3 sm:pb-0">
            <a
              className={"px-[13.5px] py-1 rounded-[7px] block text-[10px] font-semibold leading-[22px] text-center " +
                (openTab === 1 ? "text-bermuda dark:bg-[#131313] bg-silver" : "text-[#000] dark:text-white bg-deepsilver dark:bg-[#131313]")}
              onClick={e => { e.preventDefault(); setOpenTab(1); }}
            >
              All
            </a>
          </li>
          <li className="-mb-px mr-2 last:mr-0 text-center">
            <a
              className={"px-[13.5px] py-1 rounded-[7px] block text-[10px] font-semibold leading-[22px] text-center " +
                (openTab === 2 ? "text-bermuda dark:bg-[#131313] bg-silver" : "text-[#000] dark:text-white bg-deepsilver dark:bg-[#131313]")}
              onClick={e => { e.preventDefault(); setOpenTab(2); }}
            >
              Metaverse
            </a>
          </li>
          <li className="-mb-px mr-2 last:mr-0 text-center">
            <a
              className={"px-[13.5px] py-1 rounded-[7px] block text-[10px] font-semibold leading-[22px] text-center " +
                (openTab === 3 ? "text-bermuda dark:bg-[#131313] bg-silver" : "text-[#000] dark:text-white bg-deepsilver dark:bg-[#131313]")}
              onClick={e => { e.preventDefault(); setOpenTab(3); }}
            >
              Gaming
            </a>
          </li>
          <li className="-mb-px mr-2 last:mr-0 text-center">
            <a
              className={"px-[13.5px] py-1 rounded-[7px] block text-[10px] font-semibold leading-[22px] text-center " +
                (openTab === 4 ? "text-bermuda dark:bg-[#131313] bg-silver" : "text-[#000] dark:text-white bg-deepsilver dark:bg-[#131313]")}
              onClick={e => { e.preventDefault(); setOpenTab(4); }}
            >
              DeFi
            </a>
          </li>
          <li className="-mb-px mr-2 last:mr-0 text-center">
            <a
              className={"px-[13.5px] py-1 rounded-[7px] block text-[10px] font-semibold leading-[22px] text-center " +
                (openTab === 5 ? "text-bermuda dark:bg-[#131313] bg-silver" : "text-[#000] dark:text-white bg-deepsilver dark:bg-[#131313]")}
              onClick={e => { e.preventDefault(); setOpenTab(5); }}
            >
              NFT
            </a>
          </li>
        </ul>
        <div className="relative flex flex-col break-words bg-white dark:bg-[#1C1C25]">
          <div className="mt-[13px]">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"}>
                <div className='xl:w-[419px] h-[270px] overflow-auto custom-scrollbar pr-[19px]'>
                  <Table data={currentRateDate} />
                </div>
                <div className="float-right pr-6 mt-[13px]">
<button onClick={handleNavigate} className='text-[#8c8c8c] text-[10px] font-semibold leading-[22px] border border-[#E5E5E5] dark:border-[#303036] dark:bg-[#24242B] rounded-[7px] px-2.5 py-0.5 inline-block'>View All</button>
                </div>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"}>
                <div className='xl:w-[419px] h-[270px] overflow-auto custom-scrollbar pr-[19px]'>
                  <Table data={metaverseData} />
                </div>
                <div className="float-right pr-6 mt-[13px]">
<button onClick={handleNavigate} className='text-[#8c8c8c] text-[10px] font-semibold leading-[22px] border border-[#E5E5E5] dark:border-[#303036] dark:bg-[#24242B] rounded-[7px] px-2.5 py-0.5 inline-block'>View All</button>
                </div>
              </div>
              <div className={openTab === 3 ? "block" : "hidden"}>
                <div className='xl:w-[419px] h-[270px] overflow-auto custom-scrollbar pr-[19px]'>
                  <Table data={gamingData} />
                </div>
                <div className="float-right pr-6 mt-[13px]">
<button onClick={handleNavigate} className='text-[#8c8c8c] text-[10px] font-semibold leading-[22px] border border-[#E5E5E5] dark:border-[#303036] dark:bg-[#24242B] rounded-[7px] px-2.5 py-0.5 inline-block'>View All</button>
                </div>
              </div>
              <div className={openTab === 4 ? "block" : "hidden"}>
                <div className='xl:w-[419px] h-[270px] overflow-auto custom-scrollbar pr-[19px]'>
                  <Table data={defiData} />
                </div>
                <div className="float-right pr-6 mt-[13px]">
                <button onClick={handleNavigate} className='text-[#8c8c8c] text-[10px] font-semibold leading-[22px] border border-[#E5E5E5] dark:border-[#303036] dark:bg-[#24242B] rounded-[7px] px-2.5 py-0.5 inline-block'>View All</button>
                </div>
              </div>
              <div className={openTab === 5 ? "block" : "hidden"}>
                <div className='xl:w-[419px] h-[270px] overflow-auto custom-scrollbar pr-[19px]'>
                  <Table data={nftData} />
                </div>
                <div className="float-right pr-6 mt-[13px]">
                  <button onClick={handleNavigate} className='text-[#8c8c8c] text-[10px] font-semibold leading-[22px] border border-[#E5E5E5] dark:border-[#303036] dark:bg-[#24242B] rounded-[7px] px-2.5 py-0.5 inline-block'>View All</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TabsRender() {
  return <Tabs />;
}
