import React, { useEffect } from "react";
import ResetTime from "./ResetTime";

const LeftTime = ({
  sessionLength,
  setModalPop,
  modalPop,
  leftLength,
  setLeftLength,
  isSession,
  setIsSession,
  intervalId,
  setIntervalId,
  setSessionLength,
  setBreakLength,
}) => {
  // formating seconds in MM:SS
  const formatedLeftLength = new Date(leftLength * 1000)
    .toISOString()
    .slice(14, 19);
  // change the time left when the session time change
  useEffect(() => {
    setLeftLength(sessionLength);
  }, [sessionLength]);

  // check if the clock is running
  const isStarted = intervalId !== null;

  const startStopHandler = () => {
    // if there is an intervalId
    if (isStarted) {
      // if we are in started mode
      // stop the clock
      clearInterval(intervalId);
      // reset the id to null so we can start again
      setIntervalId(null);
    } else {
      // by default, we are in stopped mode
      // function to run the clock :
      // every 1000ms
      const newIntervalId = setInterval(() => {
        setLeftLength((prev) => {
          // set the time left - 1
          const newLeftLength = prev - 1;
          // check if the time left is < 0
          if (newLeftLength >= 0) {
            return prev - 1;
          } else {
            // clear the interval
            setIsSession(!isSession);
            setModalPop(!modalPop);
            // return 0
            return prev;
          }
        });
      }, 1000);

      setIntervalId(newIntervalId);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 pt-10">
      <p className="text-center text-indigo-900">
        You are currently in :{" "}
        <span className="lowercase underline underline-offset-4 text-purple-600">
          {isSession ? "Session" : "Break"}
        </span>
      </p>

      <h1 className="text-4xl border-4 border-purple-600 text-indigo-900 py-2 px-4 rounded-lg">
        {formatedLeftLength}
      </h1>

      <div className="flex space-x-5">
        <button
          className={
            isStarted
              ? "text-indigo-900 border-2 px-4 py-1 w-20 rounded-lg shadow-md border-rose-600 hover:border-transparent hover:text-white hover:bg-rose-600 transition-all"
              : "text-indigo-900 border-2 px-4 py-1 w-20 rounded-lg shadow-md border-purple-600 hover:border-transparent hover:text-white hover:bg-purple-600 transition-all"
          }
          onClick={startStopHandler}
        >
          {isStarted ? "Stop" : "Start"}
        </button>
        <ResetTime
          setIsSession={setIsSession}
          setBreakLength={setBreakLength}
          sessionLength={sessionLength}
          setSessionLength={setSessionLength}
          intervalId={intervalId}
          setIntervalId={setIntervalId}
          setLeftLength={setLeftLength}
        />
      </div>
    </div>
  );
};

export default LeftTime;
