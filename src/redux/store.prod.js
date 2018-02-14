import createStore from './store'

export default function configureStore (initialState, reducers) {
    return createStore(
        initialState,
        reducers
    )
}

