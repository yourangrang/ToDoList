import { combineReducers } from "redux";
import todos from "./todos";


const rooReducer = combineReducers({
    todos,
})

export default rooReducer;

export type RootState = ReturnType<typeof rooReducer>;