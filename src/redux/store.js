import { createStore,combineReducers } from "redux";
import groupsReducer from "./reducers/groupsReducer";
import telephonesReducer from "./reducers/telephonesReducer";


const rootReducer=combineReducers({
  telephonesState:telephonesReducer,
  groupsState:groupsReducer
})

const store=createStore(rootReducer)

export default store