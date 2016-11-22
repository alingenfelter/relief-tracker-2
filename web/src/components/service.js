const React = require('react')
const xhr = require('xhr')


// puts component i
const Service = (Component) => React.createClass({
  allDocs(model, callback) {
    xhr.get('http://localhost:4000/' + model,
    {json:true}, (err, res, body) => {
      callback(err, body)
    })
  },
  post(model, doc, callback) {
    xhr.post('http://localhost:4000/' + model, {
      json: doc
    }, (err, res, body) => {
      callback(err, body)
    })
  },
  
  render() {
    return (
      <Component {...this.props}
        allDocs={this.allDocs}
        post={this.post}
       />
    )
  }
})

module.exports = Service
