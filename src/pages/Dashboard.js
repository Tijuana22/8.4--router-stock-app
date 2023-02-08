import React from 'react'
import { Link } from 'react-router-dom'
import stocks from '../data'


function Dashboard(props) {
  return (
    <div>
      {stocks.map((stock, index)=>{
        props= {stock}
        console.log(stock)
        return(
          <Link
            key={index}
            props={props}
            to={`/dashboard/${stock.symbol}`}
          >
            <div>
              <h1>{stock.name}</h1>
            </div>

          </Link>
        )
      })}
      

        </div>
  )
}

export default Dashboard