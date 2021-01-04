import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk'
import { AuthReducer } from "../reducers/authReducer";
import { ThemesReducer } from "../reducers/themesReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: AuthReducer,
    themes: ThemesReducer
})
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
)