
import React, { useState } from 'react';
import Select from 'react-select';
import { Slider } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';

const Layout = () => {
  const select1 = [
    { value: "BTC/USD", label: "BTC/USD" },
    { value: "ETH/USD", label: "ETH/USD" },
    { value: "LINK/USD", label: "LINK/USD" },
    { value: "UNI/USD", label: "UNI/USD" },
  ];

  const select2 = [
    { value: true, label: "Long" },
    { value: false, label: "Short" },
  ];

  const [ leverage, setLeverage ] = useState(0);
  const [asset, setAsset] = useState(null);
  const [isLong, setIsLong] = useState(true);

  const handleLeverageChange = (value) => {
    const validValues = [2, 25, 50, 75, 100, 125, 150];
    const closestValue = validValues.reduce((a, b) => {
      return Math.abs(b - value) < Math.abs(a - value) ? b : a;
    });
    setLeverage(closestValue);
  };
  return (
    <div className='layout__box'>
       <Select options={select1} placeholder="Select your asset pair" defaultValue={asset} onChange={setAsset}/>
          <div className="flex flex-col  gap-5">
            <p className="text-md text-black font-mainRegular"></p>
            <div className="w-full grid grid-cols-1 sm:grid-cols-[120px,auto] gap-6 items-center">
              <input type="number" defaultValue="0" placeholder="0" className="bg-transparent outline-none text-[46px] md:text-[68px] text-blue font-mainBold"/>
              <Select options={select2} placeholder="Select your trading position" defaultValue={isLong} onChange={setIsLong}/>
            </div>

            <div className='p-2'>
              <div className='flex justify-between items-center'>
                <p className='text-[18px] font-bold'>Leverage <span className='text-[18px] font-normal'>(2x~150x)</span></p>
                  <input className='w-[100px] text-center py-2 text-[18px] font-bold rounded-[4px] leverage-count' 
                  min={2} max={150} type="number" value={leverage} 
                  onChange={(e) => setLeverage(e.target.value)} />
              </div>
              <div className='mt-4'>
                <Slider
                  defaultValue={0}
                  step={25}
                  graduated
                  progress
                  value={leverage}
                  onChange={handleLeverageChange}
                  min={2}
                  max={152}
                  renderMark={mark => {
                    if ([2, 27, 52, 77, 102, 127, 152].includes(mark)) {
                      return <span>{ mark == 2 ? mark : mark-2}</span>;
                    }
                    return null;
                  }}
                />
              </div>
            </div>
              <div className='flex flex-col pt-4 gap-5'>
                <button className='btn text-[1.25rem]'>Connect Wallet</button>
                <button className='btn text-[1.25rem]'>Trade</button>
              </div>
          </div>
       </div>
  )
}

export default Layout