import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
const [sushiLimit, setSushiLimit] = useState(4);
const [allSushi, setAllSushi] = useState([])

useEffect(() => {
  fetch(API)
  .then(res => res.json())
  .then(data => {
    let limit = data.filter(item => item.id >= (sushiLimit - 3) && item.id <= sushiLimit).slice(0, 4)
    setAllSushi(limit)}
    )
}, [sushiLimit])

function resetLimit(newLimit) {
  setSushiLimit(newLimit)
}

  return (
    <div className="app">
      <SushiContainer resetLimit={resetLimit} allSushi={allSushi} sushiLimit={sushiLimit}/>
      <Table />
    </div>
  );
}

export default App;
