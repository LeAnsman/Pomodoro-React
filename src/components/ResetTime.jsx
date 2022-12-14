import React from "react";

const ResetTime = ({
  setBreakLength,
  setSessionLength,
  intervalId,
  setIntervalId,
  setLeftLength,
  sessionLength,
  setIsSession,
}) => {
  const resetHandler = () => {
    setIsSession(true);
    setSessionLength(25 * 60);
    setLeftLength(sessionLength);
    setBreakLength(5 * 60);
    clearInterval(intervalId);
    // reset the id to null so we can start again
    setIntervalId(null);
  };

  return (
    <div>
      <button
        className="text-indigo-900 border-2 px-4 py-1 w-20 rounded-lg shadow-md border-purple-600 hover:border-transparent hover:text-white hover:bg-rose-600"
        onClick={resetHandler}
      >
        Reset
      </button>
    </div>
  );
};

export default ResetTime;
