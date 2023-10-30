import { useState, useEffect } from 'react';

import ethereum from './assets/ethereum.png';
import dai from './assets/dai.png';
import sol from './assets/solana.png';
import cardano from './assets/cardano.png';
import { GiSpermWhale } from 'react-icons/gi'

import { GoLinkExternal } from 'react-icons/go'
import { PieChart } from 'react-minimal-pie-chart';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

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
  
import {faker} from '@faker-js/faker';
import { walletAtom } from './Navbar';
import { useAtomValue } from 'jotai';
import Web3 from 'web3';





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


function Dashboard() {

    const api_key = import.meta.env.VITE_API_KEY;
  
    const walletAddress = useAtomValue(walletAtom);
    const [tokenList, setTokenList] = useState([]);
    const [nativeBalance, setNativeBalance] = useState(0);
    const [nftBalance, setNFTBalance] = useState([]);


    const getERC20Balance = async () => {
        const data = await axios.get(`https://api.chainbase.online/v1/account/tokens?chain_id=1&address=0xBE1c17a4b10cf28E343AEa4B118420F637D95dcd&limit=5&page=1`, {
          headers: {
            'x-api-key': api_key,
            'accept': 'application/json'
          }
        });
        const erc20Balances = data.data.data;
        for(let i =0; i < erc20Balances.length ; i++) {
           const numFromHex = Web3.utils.hexToNumber(erc20Balances[i].balance);
           const convertedNum = parseFloat(numFromHex.toString()) / parseFloat((10 ** erc20Balances[i].decimals).toString());
           erc20Balances[i].balance = convertedNum
        }
        setTokenList(erc20Balances);
        console.log('balance: ', erc20Balances);
    }

    const getNativeTokenBalance = async () => {
      const data = await axios.get(`https://api.chainbase.online/v1/account/balance?chain_id=1&address=0xBE1c17a4b10cf28E343AEa4B118420F637D95dcd`, {
        headers: {
          'x-api-key': api_key,
          'accept': 'application/json'
        }
      })
      const convertedBalance = Web3.utils.hexToNumber(data.data.data);
      const integerBalance = Web3.utils.fromWei(convertedBalance, 'ether');
      const roundedBalance = Math.ceil(integerBalance * 1000) / 1000;
      setNativeBalance(roundedBalance);
      console.log('porfolios: ', roundedBalance);
    }

    const getNFTBalance = async () => {
      const data = await axios.get(`https://api.chainbase.online/v1/account/nfts?chain_id=1&address=0xBE1c17a4b10cf28E343AEa4B118420F637D95dcd&page=1&limit=5`, {
        headers: {
          'x-api-key': api_key,
          'accept': 'application/json'
        }
      })
      setNFTBalance(data.data.data);
      console.log(nftBalance);
     
    }

    useEffect(() => {
      setTimeout(getERC20Balance, 1000);
      setTimeout(getNativeTokenBalance, 1000);
      setTimeout(getNFTBalance, 2000)
    }, [walletAddress])

    return (
        <div className=' w-4/5 '>
        <div className=' flex flex-row  justify-start'>
           <div className=' w-1/6 h-28 rounded-xl m-5 p-5 bg-gradient-to-tr from-cardinGreen to-cardingGreenLight shadow-xl'>
             <h4 className=' text-sm'>Balance</h4>
             <h3 className='mt-5 font-bold text-2xl'>{nativeBalance} ETH</h3>
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
            {tokenList !== null &&  tokenList.map((token) => {
              return (
                <div className=' w-[95%] h-[23%] rounded-xl mb-5 flex flex-row p-5  bg-containerGreen shadow-xl justify-evenly'>
               <img src={ethereum} width={20} height={20} />
               <h3 className=' font-bold ml-2'>{(token as any).name}</h3>
               <h3 className=' font-semibold ml-5'></h3>
               <h3 className=' font-semibold ml-5'>Current Price: ${token.current_usd_price}</h3>
               <h3 className=' font-bold ml-9 text-bullGreen w-[15%] overflow-hidden'>{token.balance}</h3>

            </div>

              )
            })}
            
           
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
              <h4 className=' '>NFT Balances</h4>
              <GiSpermWhale className=' mt-1 ml-2' />
            </div>
              <div className=' w-full h-full font-semibold overflow-auto'>
                {nftBalance.map((nft) => {
                  return (
                    <div className=' w-full h-10  flex flex-row px-5 items-center justify-around'>
                       <img src={nft.image_uri} className=' h-5 mr-5' />
                       <h4 className=' mr-5 text-green-500'>{nft.metadata.name}</h4>
                       {/* <h4>0x0A10635fc93aca122848893265eCa03e49C76447</h4> */}
                       <GoLinkExternal className=' ml-2 cursor-pointer' onClick={(e) => {
                          e.preventDefault();
                          window.location.href=`${nft.token_uri}`
                       }} />

                  </div>
                  )
                })

                }
                  
              </div>
           </div>
        </div>
      
      {/* // end of dashboard function */}
      </div>
    )

}


export default Dashboard