import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({allSushi, resetLimit, sushiLimit}) {

const displaySushi =

allSushi.map((item) => {
 return (
    <Sushi key={item.id} currentSushi={item} />
 ) 
})


  return (
    <div className="belt">
      {displaySushi}
      <MoreButton resetLimit={resetLimit} sushiLimit={sushiLimit}/>
    </div>
  );
}

export default SushiContainer;
