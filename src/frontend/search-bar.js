import React, {useState, useEffect} from "react";
import url from "../API"
import Display from "./Display";

function SearchBarInput() {
    const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState([]);

    const handleInput = e => {
        let searchWord = e.target.value.toLowerCase();
        let result = [];
        console.log(searchWord);
        if(searchWord) {
            result = allData.filter((data) => {
                return data.name.toLowerCase().search(searchWord) != -1;
                });
        } 
        setFilteredData(result);
    };

    useEffect(() => {
    const handleSearch = async e => {
        try {
        const res = await fetch(url);
        const data = await res.json();       
        setAllData(data); 
        // setFilteredData(data); 
        console.log(data);
        }
        catch(err) {
            console.log(err);
        }
    };
    handleSearch();
    }, []);

    return (
        <>
        <div>
          <Display filteredData={filteredData} handleInput={handleInput}/>
        </div>
        </>
    );
}

export default SearchBarInput;


