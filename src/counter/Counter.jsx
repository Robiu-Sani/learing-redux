import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/fetures/counter/counterSlice";

export default function Counter() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter); // Updated to match slice name

  const handleIncrement = (number) => {
    dispatch(increment(number));
  };

  const handleDecrement = (number) => {
    dispatch(decrement(number));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="bg-white shadow-2xl rounded-3xl p-10 transform transition-all duration-500 hover:scale-105">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Amazing Counter
        </h1>
        <div className="flex justify-center items-center space-x-10">
          <button
            onClick={() => handleDecrement(5)}
            className="bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white px-6 py-3 rounded-lg text-xl shadow-xl transform transition-all duration-300 hover:scale-105"
          >
            Decrease
          </button>
          <span className="text-5xl font-semibold text-gray-800">{count}</span>
          <button
            onClick={() => handleIncrement(4)}
            className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-6 py-3 rounded-lg text-xl shadow-xl transform transition-all duration-300 hover:scale-105"
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
}
