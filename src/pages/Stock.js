import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Stock() {
    const apiKey = 'ed526d15408da0307eb362670e181f66'
    const params = useParams()
    const symbol = params.symbol
    const url = `https://financialmodelingprep.com/api/v3/historical-chart/1min/${symbol}?apikey=${apiKey}`
    const [stock, setStock] = useState("null")
    const getStockFromAPI = async () =>{
        try{
            const response = await fetch(url)
            const data = await response.json()
            setStock(data)
            console.log(data)

        } catch(error){
            console.log(error);
        }
    }

    useEffect(() =>{
        getStockFromAPI()
    },[])

    const loaded = () =>{
        console.log(stock)
        return(
            <div>
                <h1>{symbol}</h1>
                <ul>
                    <li>Current: {stock[0].open}</li>
                    <li>High: {stock[0].high}</li>
                    <li>Low: {stock[0].low}</li>
                    
                </ul>
            </div>
        )
    } 


    const loading= () =>{
        return <h1>loading...</h1>
    } 
  return stock ? loaded() : loading()
    
}

export default Stock