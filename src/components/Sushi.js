import React, {useState} from "react";

function Sushi({currentSushi}) {


const [eaten, setEaten] = useState(false)

 

function handleAte() {
  setEaten(true)
}

  return (
    <div className="sushi">
      <div className="plate" onClick={handleAte}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={currentSushi.img_url}
            alt={currentSushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {currentSushi.name} - ${currentSushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
