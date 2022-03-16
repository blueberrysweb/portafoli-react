import { useDispatch, useSelector } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
  resetCounter,
} from "./redux/actions/counterActions";

export default function Counter() {
  const count = useSelector((store) => store.counterReducer.count);
  const dispatchCounter = useDispatch();
  return (
    <div className="App">
      {count}
      <button onClick={() => dispatchCounter(increaseCounter(1))}>
        Increase counter{" "}
      </button>
      <button onClick={() => dispatchCounter(increaseCounter(5))}>
        Increase counter +5
      </button>
      <button onClick={() => dispatchCounter(decreaseCounter(1))}>
        Decrease counter{" "}
      </button>
      <button onClick={() => dispatchCounter(decreaseCounter(5))}>
        Decrease counter -5
      </button>
      <button onClick={() => dispatchCounter(resetCounter(5))}>Reset</button>
    </div>
  );
}
