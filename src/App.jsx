import { useState } from "react";
import BreakTime from "./components/BreakTime";
import LeftTime from "./components/LeftTime";
import Modal from "./components/Modal";
import ResetTime from "./components/ResetTime";
import SessionTime from "./components/SessionTime";

function App() {
  // set the timing of the break in seconds
  const [breakLength, setBreakLength] = useState(5 * 60);
  // set the timing of the Session in seconds
  const [sessionLength, setSessionLength] = useState(25 * 60);
  const [leftLength, setLeftLength] = useState("");
  const [isSession, setIsSession] = useState(true);
  const [modalPop, setModalPop] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  //decrement length by one minute
  const decrementSessionLength = () => {
    const newSessionLength = sessionLength - 15;
    // prevent from going under 0
    if (newSessionLength < 0) {
      setSessionLength(0);
    } else {
      setSessionLength(newSessionLength);
    }
  };

  // increment length by one minute
  const incrementSessionLength = () => {
    setSessionLength(sessionLength + 15);
  };

  //decrement length by one minute
  const decrementBreakLength = () => {
    const newBreakLength = breakLength - 15;
    // prevent from going under 0
    if (newBreakLength < 0) {
      setBreakLength(0);
    } else {
      setBreakLength(newBreakLength);
    }
  };

  // increment length by 15 seconds
  const incrementBreakLength = () => {
    setBreakLength(breakLength + 15);
  };
  return (
    <div className="App">
      <h1 className="bg-purple-200 p-5 text-2xl font-medium text-indigo-900 text-center">
        Pomodoro timer
      </h1>
      <div className="flex justify-around">
        <SessionTime
          sessionLength={sessionLength}
          decrementSessionLength={decrementSessionLength}
          incrementSessionLength={incrementSessionLength}
        />
        <BreakTime
          breakLength={breakLength}
          decrementBreakLength={decrementBreakLength}
          incrementBreakLength={incrementBreakLength}
        />
      </div>

      <LeftTime
        sessionLength={sessionLength}
        breakLength={breakLength}
        modalPop={modalPop}
        setModalPop={setModalPop}
        leftLength={leftLength}
        setLeftLength={setLeftLength}
        isSession={isSession}
        setIsSession={setIsSession}
        intervalId={intervalId}
        setIntervalId={setIntervalId}
      />
      <ResetTime
        setBreakLength={setBreakLength}
        sessionLength={sessionLength}
        setSessionLength={setSessionLength}
        intervalId={intervalId}
        setIntervalId={setIntervalId}
        setLeftLength={setLeftLength}
      />

      <Modal
        modalPop={modalPop}
        setModalPop={setModalPop}
        breakLength={breakLength}
        setBreakLength={setBreakLength}
        setLeftLength={setLeftLength}
        sessionLength={sessionLength}
        setSessionLength={setSessionLength}
        isSession={isSession}
        setIsSession={setIsSession}
        intervalId={intervalId}
        setIntervalId={setIntervalId}
      />
    </div>
  );
}

export default App;
