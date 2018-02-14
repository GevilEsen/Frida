import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import axiosMiddleware from 'redux-axios-middleware'
import axiosMiddlewareConfig from 'config/axios_middleware_config'
import axiosInstance from 'Ajax'
import rootReducer from 'reducers'

export default function _createStore(initialState = {}, reducers = {}, enhancers = []) {
    return createStore(
        rootReducer(reducers),
        initialState,
        compose(
            applyMiddleware(
                thunk,
                axiosMiddleware(axiosInstance, axiosMiddlewareConfig)
            ),
            ...enhancers
        )
    )
}