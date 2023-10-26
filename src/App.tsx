import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import profilePicture from './assets/profile.avif'
import polygon from './assets/polygon.png';
import arbitrum from './assets/arbitrum.png';
import ethereum from './assets/ethereum.png';
import dai from './assets/dai.png';
import sol from './assets/solana.png';
import cardano from './assets/cardano.png';
import logo from './assets/logobg.png'
import { GoLinkExternal } from 'react-icons/go'
import './App.css'

import { BsGearFill } from 'react-icons/bs'

import { PieChart } from 'react-minimal-pie-chart';
import { LineChart } from '@mui/x-charts/LineChart';
import {AiOutlineCaretDown, AiOutlineCaretUp} from 'react-icons/ai';
import { GiSpermWhale } from 'react-icons/gi'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: 'white'
      }
    },
    title: {
      display: true,
      text: 'Account Performance',
      color: 'white'
    },
  },
  scales: {
    y: {
      ticks: {
        color: 'white'
      },
      grid: {
        display: false
      }
    }, 
    x: {
      ticks: {
        color: 'white'
      },
      grid: {
        display: false
      }
    }
  }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Balance',
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      color: 'white'
    },
    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
    //   borderColor: 'rgb(53, 162, 235)',
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};


function App() {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className=''>
      <div className="min-h-screen w-screen flex flex-col text-blackNight bg-cardinGreen">
        {/* <div className=' h-20 flex w-screen flex-row px-10 items-center justify-between bg-cardinGreen overflow-hidden'>
            <h2 className=' font-tiltNeon font-bold text-xl text-honeyDew'>Ethereum Terminal</h2>
            <div className=' flex font-tiltNeon font-bold text-lg h-full w-40 p-0 text-honeyDew  items-center'>
                <button onClick={() => setIsOpen((prev) => !prev)} className=' flex flex-row bg-cardinGreen h-[70%] w-full border-4 border-cardingGreenLight justify-around rounded-lg active:border-white duration-300 active:text-cardingGreenLight '>
                  Ethereum
                  <img src={ethereum} width={20} height={20} style={{ margin: '5px'}} />
                  {!isOpen ? (
                     <AiOutlineCaretDown className="mt-1.5 bg-transparent" />
                  ) : (
                     <AiOutlineCaretUp className="mt-1.5 bg-transparent" />
                  )}
                </button>
                {isOpen && (
                    <div className=' bg-cardinGreen absolute top-[70px] w-40 flex flex-col rounded-lg font-light'>
                        <div className=' flex flex-row justify-between px-5 h-10  hover:bg-cardingGreenLight items-center hover:border-l-4 '>
                           <h3>Polygon</h3>
                           <img src={polygon} width={20} height={20} /> 
                        </div>
                        <div  className=' flex flex-row justify-between px-5 h-10 hover:bg-cardingGreenLight items-center hover:border-l-4'>
                           <h3>Arbitrum</h3>
                           <img src={arbitrum} width={20} height={20} />
                        </div>
                    </div>
                )}
            </div>
        </div> */}


        {/* // dashboard menus */}
        <div className=' flex text-honeyDew'>
        <div className=' relative flex flex-col w-[18%] h-screen items-center font-tiltNeon bg-glossyBlack'>
          <div className='  w-60 h-24 mt-10 '>
              <img className=' w-60 h-24 object-cover  ' src={logo} />
          </div>
          <div className=' flex mt-10 text-sm w-40 h-8 justify-center items-center rounded-full bg-gradient-to-tr from-cardinGreen to-cardingGreenLight shadow-xl hover:shadow-indigo-500/40 cursor-pointer'>
            <h4 className=' font-burtons font-light text-honeyDew '>0xE4..Ape</h4>
          </div>

          <div className=' flex flex-col w-full mt-10 text-center'>
             <ul  className=' w-full flex flex-col list-none leading-normal text-lg items-center font-burtons font-semibold text-honeyDew cursor-pointer'>
                <li className=' w-[50%] p-3 m-3 border-red-50 bg-gradient-to-tr from-cardinGreen to-cardingGreenLight rounded-full shadow-xl hover:shadow-indigo-500/40'>Dashboard</li>
                <li className=' w-[50%] p-3 m-3 border-red-500  bg-gradient-to-tr from-cardinGreen to-cardingGreenLight rounded-full shadow-xl hover:shadow-indigo-500/40'>Staking</li>
                <li className=' w-[50%] p-3 m-3 border-red-500  bg-gradient-to-tr from-cardinGreen to-cardingGreenLight rounded-full shadow-xl hover:shadow-indigo-500/40'>Swap</li>
                <li className=' w-[50%] p-3 m-3 border-red-500  bg-gradient-to-tr from-cardinGreen to-cardingGreenLight rounded-full shadow-xl hover:shadow-indigo-500/40'>Trading</li>
             </ul>
          </div>

          <div className=' w-full h-14 absolute bottom-0 flex flex-row justify-between'>
            <div className=' flex font-tiltNeon font-bold text-sm h-full p-0 text-honeyDew  items-center'>
                <button onClick={() => setIsOpen((prev) => !prev)} className=' flex flex-row bg-cardinGreen h-[70%] w-full border-4 border-cardingGreenLight justify-around rounded-lg active:border-white duration-300 active:text-cardingGreenLight '>
                  Ethereum
                  <img src={ethereum} width={20} height={20} className=' mb-1' />
                  {!isOpen ? (
                     <AiOutlineCaretUp className=" mt-0.5 g-transparent" />
                  ) : (
                     <AiOutlineCaretDown className="mt-0.5 bg-transparent" />
                  )}
                </button>
                {isOpen && (
                    <div className=' bg-cardinGreen absolute bottom-[50px] w-40 flex flex-col rounded-lg font-light'>
                        <div className=' flex flex-row justify-between px-5 h-10  hover:bg-cardingGreenLight items-center hover:border-l-4 '>
                           <h3>Polygon</h3>
                           <img src={polygon} width={20} height={20} /> 
                        </div>
                        <div  className=' flex flex-row justify-between px-5 h-10 hover:bg-cardingGreenLight items-center hover:border-l-4'>
                           <h3>Arbitrum</h3>
                           <img src={arbitrum} width={20} height={20} />
                        </div>
                    </div>
                )}
             </div>

             <div className=' w-10 h-full flex justify-center items-center'>
               <BsGearFill />

             </div>
          </div>

        </div>
         {/* // dashboard functions */}
        <div className=' w-4/5 '>
          <div className=' flex flex-row  justify-start'>
             <div className=' w-1/6 h-28 rounded-xl m-5 p-5 bg-gradient-to-tr from-cardinGreen to-cardingGreenLight shadow-xl'>
               <h4 className=' text-sm'>Unrealized pnl</h4>
               <h3 className='mt-5 font-bold text-2xl'>$100</h3>
             </div>
             <div className=' w-1/6 h-28  rounded-xl m-5 p-5 bg-gradient-to-tr from-cardinGreen to-cardingGreenLight shadow-xl'>
               <h4 className=' text-sm'>Gross USD Holdings</h4>
               <h3 className='mt-5 font-bold text-2xl'>$100</h3>
             </div>
             <div className=' w-1/6 h-28  rounded-xl m-5 p-5 bg-gradient-to-tr from-cardinGreen to-cardingGreenLight shadow-xl'>
             <h4 className=' text-sm'>Net PnL</h4>
               <h3 className='mt-5 font-bold text-2xl'>$100</h3>
             </div>
             <div className=' w-1/6 h-28  rounded-xl m-5 p-5 bg-gradient-to-tr from-cardinGreen to-cardingGreenLight shadow-xl'>
             <h4 className=' text-sm'>Trending Token</h4>
               <h3 className='mt-5 font-bold text-2xl'>$JOE</h3>
             </div>

          </div>

          <div className=' flex flex-row p-5 justify-start'>
            <div className=' flex flex-col w-2/5  h-80 m-5 p-5 justify-start items-center rounded-xl overflow-auto bg-cardinGreen'>
              <div className=' w-[95%] h-[23%] rounded-xl mb-5 flex flex-row p-5  bg-containerGreen shadow-xl'>
                 <img src={ethereum} width={20} height={20} />
                 <h3 className=' font-bold ml-2'>200</h3>
                 <h3 className=' font-semibold ml-5'>Bought Price: $1200</h3>
                 <h3 className=' font-semibold ml-5'>Current Price: $1200</h3>
                 <h3 className=' font-bold ml-9 text-bullGreen'>+6%</h3>

              </div>
              <div className=' w-[95%] h-[23%] rounded-xl mb-5 flex flex-row p-5  bg-containerGreen shadow-xl'>
                 <img src={dai} width={20} height={20} />
                 <h3 className=' font-bold ml-2'>200</h3>
                 <h3 className=' font-semibold ml-5'>Bought Price: $1200</h3>
                 <h3 className=' font-semibold ml-5'>Current Price: $1200</h3>
                 <h3 className=' font-bold ml-9 text-bullGreen'>+6%</h3>

              </div>
              <div className=' w-[95%] h-[23%] rounded-xl mb-5 flex flex-row p-5  bg-containerGreen shadow-xl'>
                 <img src={sol} width={20} height={20} />
                 <h3 className=' font-bold ml-2'>200</h3>
                 <h3 className='  font-semibold ml-5'>Bought Price: $1200</h3>
                 <h3 className='  font-semibold ml-5'>Current Price: $1200</h3>
                 <h3 className=' font-bold ml-9 text-bearRead'>-15%</h3>

              </div>
              <div className=' w-[95%] h-[23%] rounded-xl mb-5 flex flex-row p-5  bg-containerGreen shadow-xl'>
                 <img src={cardano} width={20} height={20} />
                 <h3 className=' font-bold ml-2'>200</h3>
                 <h3 className='  font-semibold ml-5'>Bought Price: $1200</h3>
                 <h3 className='  font-semibold ml-5'>Current Price: $1200</h3>
                 <h3 className=' font-bold ml-9 text-bullGreen'>+6%</h3>

              </div>
              <div className=' w-[95%] h-[23%] rounded-xl mb-5 flex flex-row p-5  bg-containerGreen shadow-xl'>
                 <img src={ethereum} width={20} height={20} />
                 <h3 className=' font-bold ml-2'>200</h3>
                 <h3 className='  font-semibold ml-5'>Bought Price: $1200</h3>
                 <h3 className='  font-semibold ml-5'>Current Price: $1200</h3>
                 <h3 className=' font-bold ml-9 text-bullGreen'>+6%</h3>

              </div>
                {/* <h3 className=' font-bold'>Account Perfomance</h3>
                <LineChart
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                    series={[
                          {
                               data: [2, 5.5, 2, 8.5, 1.5, 5],
                          },
                     ]}
                   width={400}
                  height={300}
                /> */}
            </div>
            <div className=' flex flex-col ml-40 w-[20%] h-80 m-5  items-center '>
               <h3 className=' font-bold'>Asset Allocation</h3>
               <PieChart 
                  data={[
                    { title: 'One', value: 10, color: '#E38627' },
                    { title: 'Two', value: 15, color: '#C13C37' },
                    { title: 'Three', value: 20, color: '#6A2135' },
                  ]}
                  style={{ width: '70%', height: '70%'}}
                  className='mt-8'
               />
            </div>
           

          </div>
          <div className=' flex flex-row p-5 justify-start'>
             <div className=' w-2/5  m-5 p-3 rounded-lg bg-gradient-to-tr from-cardinGreen to-cardingGreenLight shadow-xl'>
                <Line options={options} data={data}  />
               {/* // start of forEach */}
                 
             </div>
             <div className=' w-[50%] m-5 p-5 rounded-lg flex flex-col items-center font-burtons bg-gradient-to-tr from-cardinGreen to-cardingGreenLight shadow-xl'>
              <div className=' w-full h-8 flex flex-row justify-center '>
                <h4 className=' '>Whale Tracker </h4>
                <GiSpermWhale className=' mt-1 ml-2' />
              </div>
                <div className=' w-full h-full font-semibold '>
                    <div className=' w-full h-10  flex flex-row px-5 items-center justify-around'>
                         <img src={dai} className=' h-5 mr-5' />
                         <h4 className=' mr-5 text-green-500'>Buy</h4>
                         <h4>0x0A10635fc93aca122848893265eCa03e49C76447</h4>
                         <h4 className=' ml-20'>2500</h4>
                         <GoLinkExternal className=' ml-24' />

                    </div>
                    <div className=' w-full h-10 flex flex-row px-5 items-center justify-around'>
                         <img src={sol} className=' h-5 mr-5' />
                         <h4 className=' mr-5 text-red-500'>Sell</h4>
                         <h4>0x0A10635fc93aca122848893265eCa03e49C76447</h4>
                         <h4 className=' ml-20'>2500</h4>
                         <GoLinkExternal className=' ml-24' />

                    </div>
                </div>
             </div>
          </div>
        
        {/* // end of dashboard function */}
        </div>
        
           
      </div>


      </div>
     
    </div>
  )
}

export default App
