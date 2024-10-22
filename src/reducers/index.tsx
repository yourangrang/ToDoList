import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";


const rooReducer = combineReducers({
    counter,
    todos
})

export default rooReducer;

export type RootState = ReturnType<typeof rooReducer>;