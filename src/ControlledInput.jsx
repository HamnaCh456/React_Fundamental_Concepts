import React,{useState} from 'react';
function ControlledInput() {
  const [text, setText] = useState("");

  return (
    <div>
     <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {text.length < 3 && (
        <p >Must be at least 3 chars</p>
      )}
    </div>
  );
}

export default ControlledInput;