import "./styles.css";
import Header from "./Header";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import Template from "./card";
import axios from "axios";
export default function App() {
  const [obj, setObj] = useState({});
  const [timer, setTimer] = useState(null);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const callApi = async (city) => {
    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=522e3daf2bee4060809172415232706&q=${city}&aqi=no`
      );

      setObj(res.data);
      console.log(obj);
      console.log(obj.current.condition.icon);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  const debounceSearch = (event, debounceTimeout) => {
    if (timer) {
      clearTimeout(timer);
    }
    const searchValue = event.target.value;
    const timerId = setTimeout(() => {
      callApi(searchValue);
    }, 500);
    setTimer(timerId);
  };
  // useEffect(()=>{callApi(Name)},[Name])
  return (
    <div className="App">
      <Header />
      <>
        <TextField
          required
          id="outlined-required"
          label="Enter a City"
          onChange={(e) => {
            setSearch(e.target.value);
            debounceSearch(e);
          }}
        />
        {/* {Object.keys(obj).length === 0 ? (
          <h4>Enter the City Name</h4>
        ) : obj.current ? (
          <Template data={obj} />
        ) : (
          <h4>No result found</h4>
        )} */}
        {!error ? (
          <h4>Enter the City Name</h4>
        ) : obj.current ? (
          <Template data={obj} />
        ) : (
          <h4>No result found</h4>
        )}
      </>
    </div>
  );
}
