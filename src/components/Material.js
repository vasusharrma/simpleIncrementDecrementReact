import { useState } from "react";
import "./Material.css";

function Material() {
  const [currValue, setValue] = useState(0);

  function decBtnHandler() {
    setValue(currValue - 1);
  }

  function incBtnHandler() {
    setValue(currValue + 1);
  }

  function resBtnHandler(){
    setValue(0);
  }


  return (
    <div className="material_outside">
      <p id="material_para">Increment & Decrement</p>
      <div className="material_box">
        <button className="minus_btn material_btn" onClick={decBtnHandler}>
          -
        </button>
        <p class="material_para">{currValue}</p>
        <button className="plus_btn material_btn" onClick={incBtnHandler}>
          +
        </button>
      </div>
      <button className="material_reset_btn" onClick={resBtnHandler}>Reset</button>
    </div>
  );
}

export default Material;
