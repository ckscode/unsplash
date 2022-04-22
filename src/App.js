import React from "react"
import {useState} from "react"
import axios from "axios"
import "./style.css"
const App=()=>{
    const [location,setLocation]=useState('')
    const [data,setData]=useState([])
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7045ff42f23d49e7601563eb17b37bfd&units=metric`
    
  
    const dataChange=(event)=>{
        if(event.key==="Enter"){
        axios.get(url).then((res)=>{setData(res.data)
        console.log(res.data)})
        setLocation('')
        
        }
    }
  

return(<div className="app container-fluid text-light">
 <div className="search text-center" >
<input type="text"  className="px-2 py-1" name="city" value={location} onChange={(e)=>setLocation(e.target.value)} placeholder="location" 
onKeyPress={dataChange}></input>
</div>
<div className="top pt-5">
<div className="location text-center  mt-4">
    <h3 >{data.name}</h3>
</div>
<div className="temp " >
    {data.main?<h1 className=" my-1 text-center bold">{data.main.temp.toFixed()}&#176;C</h1>:null}
</div>
<div className="description">
    {data.weather?<h2 className="slightbold">{data.weather[0].main}<br></br>
    <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}></img></h2>:null}
    
</div></div>
{data.main != undefined?
    <div className="bottom py-2 text-center rounded-3 d-flex flex-wrap  justify-content-evenly mx-auto">
    <div className="feels  ">
        {data.main?<h3 className="slightbold">{data.main.feels_like.toFixed()}&#176;C</h3>:null}
          <p >Feels Like</p>
    </div>
    <div className="humidity   ">
        {data.main?<h3 className="slightbold">{data.main.humidity.toFixed()}%</h3>:null}
        <p>Humidity</p>
    </div>
    <div className="wind ">
        {data.wind? <h3 className="slightbold">{data.wind.speed.toFixed()}MPS</h3>:null}
       
        <p>Wind</p>
    </div>
</div>:null}

</div>)
 
}

export default App
