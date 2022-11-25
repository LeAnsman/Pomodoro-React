const BreakTime = ({
  breakLength,
  decrementBreakLength,
  incrementBreakLength,
}) => {
  // convert seconds in minutes
  const formatedBreakLength = new Date(breakLength * 1000)
    .toISOString()
    .slice(14, 19);

  return (
    <div className="flex flex-col items-center space-y-3">
      <p className="text-xl p-2 text-indigo-900">Break</p>
      <div className="flex items-center space-x-3">
        <button
          className="text-lg border-2 border-purple-600 text-indigo-900 px-4 rounded-lg shadow-md hover:border-transparent hover:text-white hover:bg-purple-600"
          onClick={decrementBreakLength}
        >
          -
        </button>
        <p className="text-xl font-medium text-indigo-900">
          {formatedBreakLength}
        </p>

        <button
          className="text-lg border-2 border-purple-600 text-indigo-900 px-4 rounded-lg shadow-md hover:border-transparent hover:text-white hover:bg-purple-600"
          onClick={incrementBreakLength}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default BreakTime;
