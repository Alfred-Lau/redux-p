var createStore = require('redux').createStore;

function todos (state = [] , action) {
    switch (action.type) {
    case 'ADD_TODO': {
        // 此处的返回值会被当做全新的state tree
        return state.concat([action.text]);
    }
    default:
        return state;
    }
}

// let store = createStore(todos, ['Use Redux'])

// store.dispatch({
//   type: 'ADD_TODO',
//   text: 'Read the docs'
// })

// console.log(store.getState())

let store = createStore(todos, ['Use Redux']);

// actions
function addTodo (text) {
    return {
        type: 'ADD_TODO',
        text};
}

store.dispatch(addTodo('Read the docs'));
store.dispatch(addTodo('Read about the middleware'));
console.log(store.getState());
