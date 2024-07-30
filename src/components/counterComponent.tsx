import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store";
import { decrement, incementByAmount, increment } from "../store/counter/counterSlice";
import { Box, Button, Typography } from "@mui/material";

const Counter: React.FC = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
            <Typography variant="h1">{count}</Typography>
            <Box mt={2}>
                <Button variant="contained" color="primary" onClick={() =>  dispatch(increment())}>
                    Increment
                </Button>
                <Button variant="contained" color="secondary" onClick={() =>  dispatch(decrement())}>
                    Decrement
                </Button>
                <Button variant="contained" onClick={() =>  dispatch(incementByAmount(5))}>
                    Increment by 5
                </Button>
            </Box>
        </Box>
    );
}

export default Counter;