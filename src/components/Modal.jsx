import React from "react";

const Modal = ({
  setModalPop,
  modalPop,
  breakLength,
  setBreakLength,
  sessionLength,
  setSessionLength,
  setLeftLength,
  setIsSession,
  intervalId,
  setIntervalId,
}) => {
  const modalGoOnBreakHandler = () => {
    setLeftLength(breakLength);
    setModalPop(!modalPop);
  };

  const modalGoOnSessionHandler = () => {
    setLeftLength(sessionLength);
    setModalPop(!modalPop);
    setIsSession(true);
  };

  const modalCancelHandler = () => {
    setSessionLength(sessionLength);
    setBreakLength(breakLength);
    setLeftLength(sessionLength);
    clearInterval(intervalId);
    // reset the id to null so we can start again
    setIntervalId(null);
    setModalPop(!modalPop);
  };
  return modalPop ? (
    <div className="POPUP POPUP fixed top-0 left-0 w-full h-screen bg-gray-400 bg-opacity-20 flex justify-center items-center z-10">
      <div className="relative p-8 w-[90%] max-w-2xl bg-purple-200 shadow-lg rounded-lg animate-appear">
        <div className="flex justify-between">
          <button
            onClick={modalGoOnSessionHandler}
            className="MODAL_SESSION_BTN mx-auto sm:mx-0 shadow-lg bg-transparent hover:bg-purple-600 text-indigo-900 font-semibold hover:text-white py-2 px-4 border-4 border-purple-600 hover:border-transparent rounded-lg"
          >
            Rerun a session
          </button>
          <button
            onClick={modalGoOnBreakHandler}
            className="MODAL_BREAK_BTN mx-auto sm:mx-0 shadow-lg bg-transparent hover:bg-purple-600 text-indigo-900 font-semibold hover:text-white py-2 px-4 border-4 border-purple-600 hover:border-transparent rounded-lg"
          >
            Go on a break
          </button>

          <button
            onClick={modalCancelHandler}
            className="MODAL_CANCEL_BTN mx-auto sm:mx-0 shadow-lg bg-transparent hover:bg-purple-600 text-indigo-900 font-semibold hover:text-white py-2 px-4 border-4 border-purple-600 hover:border-transparent rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Modal;
