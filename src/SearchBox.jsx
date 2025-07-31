import "./SearchBox.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
export default function SearchBox({updateInfo}){
    // const API_URL ="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
    const API_URL ="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="e78de7d7e2a59cc98a4c4d5ecf44bb33";
    let[city,setCity]=useState("Delhi");
    let[err,setErr]=useState(false);


let getWeather=async(city)=>{
     const URL =`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`

       try{
         let response=await fetch(URL);
        let jsonResponse=await response.json();
        console.log(jsonResponse);

        let result={
            City:city,
            Temp:jsonResponse.main.temp,
            TempMin:jsonResponse.main.temp_min,
            TempMax:jsonResponse.main.temp_max,
            Humidity:jsonResponse.main.humidity,
            FeelsLike:jsonResponse.main.feels_like,
            Weather:jsonResponse.weather[0].description
        }
        console.log(result);
        return result;
       }
       catch(err){
        throw err;
       }
}





useEffect(() => {
    const fetchData = async () => {
        try {
            const defaultInfo = await getWeather("Delhi");
            updateInfo(defaultInfo);
            setCity("");
            setErr(false);
        } catch (err) {
            setErr(true);
        }
    };

    fetchData(); 
}, []);



let handlechange=(eve)=>{
setCity(eve.target.value);
}

let handleSubmit=async(event)=>{
event.preventDefault();
try {
        console.log(city);
        let info = await getWeather(city);  
        updateInfo(info);
        setCity("");                   
        setErr(false);                
    } 
    catch (err) {
        setErr(true);                 
    }
}
 useEffect(() => {
      if (err) {
        alert("City not found here!");
        setCity("");
        setErr(false);
      }
    }, [err]);
    
    
    return(
        <div className="SearchBox">

          <form  onSubmit={handleSubmit}>

            <TextField id="city" label="City Name"  variant="outlined" required  value={city} onChange={handlechange}  
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '9px',
              },
            }} />
                    
            <br/><br/> 


              <Button variant="contained" endIcon={<SearchIcon/>}type="submit"  sx={{
                  backgroundColor: 'rgba(58, 63, 156, 1)',
                  '&:hover': {
                    backgroundColor: 'rgba(64, 68, 144, 1)',
                  },
                }}>
                     Search 
              </Button>
           
          </form>
        </div>
    )
}