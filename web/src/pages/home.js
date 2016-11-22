const React = require('react')
const {Link} = require('react-router')

const Home = React.createClass({
  render() {
    return (
      <div>
        <h1>Welcome to the Relief Tracker Home Page</h1>
        <p>Menu</p>
        <ul>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li> 
            <Link to='/efforts'>Efforts</Link>
          </li>
        </ul>
      </div>
    )
  }
})

module.exports = Home
