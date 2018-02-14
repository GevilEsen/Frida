import createStore from './store'
import DevTools from 'containers/index/devtools'

export default function configureStore(initialState, reducers) {
    const store = createStore(
        initialState,
        reducers, [
            //redux调试工具
            DevTools.instrument()
        ]
    );

    //支持webpack热重启
    if (module.hot) {
        module.hot.accept('reducers', () => {
            const nextRootReducer = require('reducers')(reducers);
            store.replaceReducer(nextRootReducer)
        })
    };

    return store
}