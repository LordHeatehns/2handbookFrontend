
import RootReducer from "./RootReducer";
import { createStore , applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { compose } from "redux";





const Store = compose(
    applyMiddleware(thunk),
)(createStore)(RootReducer,composeWithDevTools());





export default Store;