import React, {Component} from 'react'


class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleEdit: false,
      input: props.log.visited
    }
    this.handleChange = this.handleChange.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  handleChange (event) {
    this.setState({ input: event.target.value })
  }

  toggleEdit () {
    this.setState({ toggleEdit: !this.state.toggleEdit });
  }

  render () {
    const {log, index} = this.props
    const {input} = this.state
    return (
      <ul>
         <p 
          className = "row"
         >
           {log.name}
          <h4
          className = "x"
          onClick = { () => {
            this.props.removeFromLog(index)
          }} 
         > x </h4>
         </p>
        <div className = "row">
          {this.state.toggleEdit ? (
            <input
              className = "inputBar"
              value = {input}
              onChange = {this.handleChange}
            />
          ) : (
            <p>Times visted: {input}</p>
          )}
        
          {this.state.toggleEdit ? (
            <button
              className = "buttons"
              onClick = { () => {
                this.props.updateTimesVisited(index, input)
                this.toggleEdit()
              }}
            >
              Update
            </button>)
        
            : (<button 
                className = "buttons"
                onClick = { () => {
                this.toggleEdit()
              }}
            >
            Adjust
          </button>
          )}
        </div>
        <hr/>
      </ul>
    )
  }
}


export default Edit
