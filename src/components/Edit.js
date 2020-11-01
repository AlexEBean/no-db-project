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
          <p
          onClick = { () => {
            this.props.removeFromLog(index)
          }} 
         > X </p>
         </p>
        <div className = "row">
          {this.state.toggleEdit ? (
            <input
              value = {input}
              onChange = {this.handleChange}
            />
          ) : (
            <p>Times visted: {input}</p>
          )}
        
          {this.state.toggleEdit ? (
            <button
              onClick = { () => {
                this.props.updateTimesVisited(index, input)
                this.toggleEdit()
              }}
            >
              Update
            </button>)
        
            : (<button 
            onClick = { () => {
              this.toggleEdit()
            }}
          >
            Adjust
          </button>
          )}
        </div>
    
      </ul>
    )
  }
}


export default Edit
