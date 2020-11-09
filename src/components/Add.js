import React from 'react'


const Add = (props) => {
  const {index} = props
  return (
    <ul>
       <div className = "row">
        <p
            className = "place"
        >
            {props.list.name}
        </p>
        <h4
            className = "x"
            onClick = { () => {
                props.removeFromList(index)
            }} 
          >
            x 
        </h4>
      </div>
      <button
        className = "buttons"
        onClick = { () => {
          props.addToWishlist(index)
        }}
      >
        Add to Where You Want To Go
      </button>
      <hr/>
    </ul>
  )
}


export default Add
