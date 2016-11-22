const React = require('react')
const Home = require('./pages/home')
const About = require('./pages/about')

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Home />
        <About />
      </div>
    )
  }
})

module.exports = App
