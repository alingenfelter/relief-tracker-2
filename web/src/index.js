const React = require('react')
const ReactDOM = require('react-dom')
// to set up index.js before creating app.js
//const App = () => <h1>Hello, React</h1>
const App = require('./app')

//const App = () => <h1>Hello, React</h1>
ReactDOM.render(<App />, document.getElementById('root'))
