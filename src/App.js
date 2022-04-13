import React from "react"
import {useState} from "react"
import axios from "axios"
import "./style.css"
const Toggle=()=>{
    const [photo,setPhoto]=useState("")
    const [clientID,setClientId]=useState("6KEric3FgZRQKtt29TgdyYJ64fXmQG-sX_oRZGi5Ymw")
    const [result,setResult]=useState([])
   const handleChange=(e)=>{
      setPhoto(e.target.value)
      
    }
    const handleClick=()=>{
      
       axios.get(`https://api.unsplash.com/search/photos?page=3&query=${photo}&client_id=${clientID}`).then((res)=>setResult(res.data.results))
    }
    return(
        <div className="container text-center"><div className="py-4"><h1>Unsplash App</h1>
        <input id="inp" className="form-control mt-3 w-50 mx-auto" type="text" name="photo" onChange={handleChange}></input>
        <button className="btn btn-primary m-3 text-light" type="submit" onClick={handleClick}>Get!</button></div>
        <div className="container-fluid">
        <div className="d-flex justify-content-center flex-row flex-wrap">
            
        {result.map((item)=>
        <div className="col-12 col-sm-5 col-lg-4 p-2 ">
            <div className="w-100"><img className="h-100 w-100 shadow " src={item.urls.small} alt="" ></img></div> </div>) }
           
            </div>
           </div>
       </div>
    )

}

export default Toggle
