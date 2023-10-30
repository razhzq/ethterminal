import { useState, useContext } from "react"
import logo from './assets/logobg.png'
import polygon from './assets/polygon.png';
import arbitrum from './assets/arbitrum.png';

import {AiOutlineCaretDown, AiOutlineCaretUp} from 'react-icons/ai';

import { Link } from 'react-router-dom';
import ethereum from './assets/ethereum.png';

import { BsGearFill } from 'react-icons/bs'

import Web3 from 'web3';
import { atom, useAtom, useAtomValue } from 'jotai';


export const walletAtom = atom("");



function Navbar() {

   const [wallet, setWallet] = useAtom(walletAtom);
   const readWallet = useAtomValue(walletAtom);


    const connectWallet = async () => {
       (window as any).ethereum.request({ method: "eth_requestAccounts"}).then((accounts: string[]) => {
            setWallet(accounts[0]);
            console.log(wallet);
       })
    }

    const [isOpen, setIsOpen] = useState<boolean>(false);
    

    return (
       <>
       <div className=' relative flex flex-col w-[18%] h-screen items-center font-tiltNeon bg-glossyBlack'>
          <div className='  w-60 h-24 mt-10 '>
              <img className=' w-60 h-24 object-cover  ' src={logo} />
          </div>
          <div className=' flex mt-10 text-sm w-40 h-8 justify-center items-center rounded-full bg-gradient-to-tr from-cardinGreen to-cardingGreenLight shadow-xl hover:shadow-indigo-500/40 cursor-pointer' onClick={connectWallet}>
            <h4 className=' font-burtons font-light text-honeyDew '>
               {wallet
                 ?  (`${wallet.substring(0,3)}...${wallet.substring(wallet.length - 3)}`)
                 : 'Connect Wallet'
               }
            </h4>
          </div>

          <div className=' flex flex-col w-full mt-10 text-center'>
             <ul  className=' w-full flex flex-col list-none leading-normal text-lg items-center font-burtons font-semibold text-honeyDew cursor-pointer'>
                
                <Link className="w-[50%] route" to="/">
                <li className='w-[100%] p-3 my-3 mx-auto border-red-500  bg-gradient-to-tr from-cardinGreen to-cardingGreenLight rounded-full shadow-xl hover:shadow-indigo-500/40'>Dashboard</li>
                </Link>
                <li className=' w-[50%] p-3 m-3 border-red-500  bg-gradient-to-tr from-cardinGreen to-cardingGreenLight rounded-full shadow-xl hover:shadow-indigo-500/40'>Staking</li>
                <li className=' w-[50%] p-3 m-3 border-red-500  bg-gradient-to-tr from-cardinGreen to-cardingGreenLight rounded-full shadow-xl hover:shadow-indigo-500/40'>Swap</li>
                <Link className='w-[50%] route' to="/trading">
                <li className=' w-[100%] p-3 my-3 mx-auto border-red-500  bg-gradient-to-tr from-cardinGreen to-cardingGreenLight rounded-full shadow-xl hover:shadow-indigo-500/40'>Trading</li>
                </Link>
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
       </>
    )
}


export default Navbar