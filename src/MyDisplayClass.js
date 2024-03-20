import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class MyDisplayClass extends Component {
  
    state = {
        data : []
    }

    componentDidMount()
    {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(y=>y.json())
        .then(y=>{
            this.setState({...this.state,data:y});
        })
    }

  render() {
    return (
      <div>{this.state.data.map((v)=>{

        return (<div>{v.title}</div>)
      })}</div>
    )
  }
}
