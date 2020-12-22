import React,{Component} from 'react'
class Form extends Component {
  render() {
        return (
            <div>
                 {this.props.match.params.index}  
            </div>
        )
  }
}

export default Form
