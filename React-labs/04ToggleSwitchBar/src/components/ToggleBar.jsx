import { useState } from "react";
import "./ToggleBar.css";

export const ToggleBar = () => {
    const [text, setText] = useState(false)

    const handleClick = () => {
        setText(prevState => !prevState);
    };
  return (
    <>
      <div id="container">
        <div className="outerlayer"
        onClick={handleClick}>
            <div className={`innerlayer ${(text) ? 'Toggle' : 'off'}`}
            onClick={handleClick}>
                <span
                onClick={handleClick}>
                {(text == false) ? 'off' : 'on'}    
                </span>
            </div>
        </div>
      </div>
    </>
  );
};
