import React from "react";
export default function Dashboard() {
  return (
    <div className="dashboard p-3">
      <button
        className={
          "text-lg border border-sky-500 transition duration-300 p-2 font-semibold rounded-lg shadow mr-2 hover:text-blue-400 hover:bg-white-500"
        }
      >
        Now showing
      </button>
      <button
        className={
          "text-lg transition duration-300 font-semibold p-2 rounded-lg shadow hover:bg-white-500"
        }
      >
        Coming soon
      </button>
      <div className="p-3">
        <div className="bg-cover">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}
