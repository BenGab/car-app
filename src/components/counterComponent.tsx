import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store";
import { decrement, incementByAmount, increment } from "../store/counter/counterSlice";

const Counter: React.FC = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incementByAmount(5))}>Increment 5</button>
        </div>
    );
}

export default Counter;