import { useEffect, useState } from "react";

function FetchData (){

    const [data, setData] = useState([]);
    
    useEffect(() => {
      fetch("record.json")
      .then((response) => {
        return response.json();
      })
      .then((convertedData) => {
        console.log("++++++++",convertedData);
        setData(convertedData);
     
      })
      .catch((error) => {
        console.log("this is error=", error);
      });
    },[])
  }

    export default FetchData;