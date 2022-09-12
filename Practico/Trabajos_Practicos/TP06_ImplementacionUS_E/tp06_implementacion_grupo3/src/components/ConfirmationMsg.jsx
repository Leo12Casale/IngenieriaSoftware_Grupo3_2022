import React from "react";

export default function ConfirmationMsg({ success = true, msg }) {
  let type = "success";
  let d = "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z";
  // if (!success) {
  //   type = "warning";
  //   d =
  //     "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z";
  // }
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center p-10 z-10">
      <div className="absolute top-0 left-0 w-screen h-screen"></div>
      <div className={`alert alert-${type} shadow-lg  w-fit`}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={d}
            />
          </svg>
          <span>{msg}</span>
        </div>
      </div>
    </div>
  );
}
