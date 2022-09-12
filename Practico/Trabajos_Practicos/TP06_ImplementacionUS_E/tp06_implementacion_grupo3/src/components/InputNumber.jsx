import { useState } from "react";

export default function InputNumber({ refEl, maxLength }) {
  //   const [value, setValue] = useState("");

  //   const handleChange = (event) => {
  //     const result = event.target.value.replace(/\D/g, "");

  //     setValue(result.slice(0, maxLength));
  //   };

  return (
    <input
      type="text"
      className="input input-bordered bg-white"
      //   value={value}
      //   onChange={handleChange}
      onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }}
      maxLength={maxLength}
      ref={refEl}
    />
  );
}
