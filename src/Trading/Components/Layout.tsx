// import React from 'react'
// import Select from 'react-select'
// import { Slider } from 'rsuite';
// import { useState } from 'react';
// import 'rsuite/dist/rsuite.min.css';

// const Layout = () => {

//   const handleLeverageChange = (value) => {
//     const validValues = [2, 25, 50, 75, 100, 125, 150];
//     const closestValue = validValues.reduce((a, b) => {
//       return Math.abs(b - value) < Math.abs(a - value) ? b : a;
//     });
//     setLeverage(closestValue);
//   };

//   const [ leverage, setLeverage ] = useState(0);

//   const options_asset = [
//     { value: 'BTC/USD', label: 'BTC/USD' },
//     { value: 'ETH/USD', label: 'ETH/USD' },
//     { value: 'LINK/USD', label: 'LINK/USD' },
//     { value: 'UNI/USD', label: 'UNI/USD' }
//   ]

//   const options_position = [
//     {value:'long', label:'Long'},
//     {value:'short',label:'Short'}
//   ]

//   return (
//     <div className='layout__box'>
//         <div>
//           <h3>Asset Pair</h3>
//           <Select options={options_asset}/>
//         </div>

//         <div>
//           <input type="number" className='bg-transparent outline-none border'/>
//           <Select options={options_position}/>
//         </div>

//         <div>
//         <h3>Leverage <span>(2x~150x)</span></h3>
//         <input className='w-[100px] text-center py-2 text-[18px] font-bold rounded-[4px]'
//         type="number" value={leverage} min={0}
//         max={150}
//         onChange={(e) => setLeverage(e.target.value)} />
//         <Slider
//                   defaultValue={0}
//                   step={25}
//                   graduated
//                   progress
//                   value={leverage}
//                   onChange={handleLeverageChange}
//                   min={0}
//                   max={152}
//                   renderMark={mark => {
//                     if ([2, 27, 52, 77, 102, 127, 152].includes(mark)) {
//                       return <span>{ mark == 2 ? mark : mark-2}</span>;
//                     }
//                     return null;
//                   }}
//                 />
//         </div>
//     </div>
//   )
// }

// export default Layout