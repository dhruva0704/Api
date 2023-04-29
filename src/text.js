import React, { useState, useEffect } from 'react';
import './App.css';

function Text() {
const [ record, setRecord] = useState([]);
const getData =()=>{
    fetch('https://devapi.proxtera.app/v4/openSearch?limit=25&query_string=food&offset=0&platform_country=null')
    .then(response => response.json())
    .then(data => setRecord(data.data.results))
    .catch(err => console.log(err))   
}
  useEffect(() => {
getData()
    }, []);
console.log(record)
  return (
    <div>
          {
            record?.map?.((e)=>(
                <div className="container">
                <div className="card"  style={{width: "18rem"}}>
                <img className="card-img-top" src={e.images} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">{e.name}</h5>
                  <p className="card-text">{e.description}</p>
                  <div > <div className='hi'><p className="amount">{e.unit_price.currency} - {e.unit_price.amount}</p></div>  <div></div><input type="checkbox" name="" id="" /></div>
                </div>
              </div>
              </div>
            ))
          }
    </div>
      )
        }

export default Text;
