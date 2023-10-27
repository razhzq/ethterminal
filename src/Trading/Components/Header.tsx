import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (<div className='header__container flex items-center justify-between'>
          <div className='left flex items-center'>
              <img src="" alt="" />
              <h2 className='text-[2rem] font-semibold'><Link className='route' to="/">EthTerminal</Link></h2>
          </div>

          <div className="right flex items-center text-[1.5rem] font-semibold gap-[1.5rem] text-white">
          <Link to="/">DashBoard</Link>
          <Link to="/">Staking</Link>
          <Link to='/'>Swap</Link>
          <button className='text-[1.25rem]'>Connect</button>
          </div>
      </div>);
}

export default Header