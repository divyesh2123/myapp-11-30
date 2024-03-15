import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class MyDisplay extends Component {
 
    state = {

        data: []
    }

    componentDidMount()
    {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(y=>y.json())
        .then(y=>{

            this.setState({...this.state,data:y})
        })

    }

  render() {
    return (
      <div>{
        
            this.state.data.map((v)=>{

                return(<div>{v.name}</div>)
            })
        
        }</div>
    )
  }
}
