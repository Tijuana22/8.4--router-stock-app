import React from 'react'
import {Link,useLocation } from 'react-router-dom';




export default function Nav() {
  const location =useLocation();
  
  return (
    
    <div className='nav'>
        <nav>
        <ul>
          <li>
            <Link to="/"className={location.pathname === '/' ? 'active' : ''}>
              HOME
            </Link>
          </li>

          <li>  
            <Link to="/dashboard" className={location.pathname === '/stock/:symbol' ? 'active' : ''}>
              STOCK
            </Link>
          </li>

          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              ABOUT
            </Link>
          </li>
        </ul>
        </nav>



    </div>
    

  )
}

