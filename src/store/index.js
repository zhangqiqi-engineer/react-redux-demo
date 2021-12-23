import { createStore ,combineReducers,compose,applyMiddleware} from "redux";

import thunk from "redux-thunk";
import product from "./reducers/notice"
import notice from "./reducers/product";

const rootReducer = combineReducers({product,notice});

const store = createStore(rootReducer,applyMiddleware(thunk))
export default store;