const SessionTime = ({
  sessionLength,
  decrementSessionLength,
  incrementSessionLength,
}) => {
  // convert seconds in minutes
  const formatedSessionLength = new Date(sessionLength * 1000)
    .toISOString()
    .slice(14, 19);

  return (
    <div className="flex flex-col items-center space-y-3">
      <p className="text-xl text-indigo-900 p-2">Session</p>

      <div className="flex items-center space-x-4">
        <button
          className="text-lg text-indigo-900 border-2 border-purple-600 px-4 rounded-lg shadow-md hover:border-transparent hover:text-white hover:bg-purple-600"
          onClick={decrementSessionLength}
        >
          -
        </button>
        <p className="text-xl font-medium text-indigo-900">
          {formatedSessionLength}
        </p>

        <button
          className="text-lg text-indigo-900  border-2 border-purple-600 px-4 rounded-lg shadow-md hover:border-transparent hover:text-white hover:bg-purple-600"
          onClick={incrementSessionLength}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SessionTime;
