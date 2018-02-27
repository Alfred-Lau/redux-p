var { compose } = require('redux');

const one = () => 'hello';
const two = (name) => `${name}, world`;


const res = compose(two, one);

console.log(res());
