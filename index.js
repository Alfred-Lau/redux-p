// custom the log middleware
var { createStore, applyMiddleware } = require('redux');
var todos = require('./reducers');

function logger ({ getState }) {
    return next => action => {
        console.log(getState());
        console.log('will dispatch', action);

        // Call the next dispatch method in the middleware chain.
        let returnValue = next(action);

        console.log('state after dispatch', getState());

        // This will likely be the action itself, unless
        // a middleware further in chain changed it.
        return returnValue;
    };
}

let store = createStore(
    todos,
    {todo:['Use Redux']},
    applyMiddleware(logger)
);

store.dispatch({
    type: 'ADD_TODO',
    text: 'Understand the middleware'
});
// (These lines will be logged by the middleware:)
// will dispatch: { type: 'ADD_TODO', text: 'Understand the middleware' }
// state after dispatch: [ 'Use Redux', 'Understand the middleware' ]
