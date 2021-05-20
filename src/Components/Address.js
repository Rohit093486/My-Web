import React, { Component } from 'react'
import Buy from './Buy'
import Slider from './Slider'
class Address extends Component {  
  constructor(props) {
    super(props)
    this.state = {}    
}
  render() {      
      return (   
        <div>
          <Slider />
          <Buy />
        </div>        
        )
    }
}
export default Address
