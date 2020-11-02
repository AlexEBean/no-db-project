import React from 'react'


const Remove = (props) => {
    const {wishlist, index} = props
  return (
    <div>
      <ul className = "row">
        <p
          className = "place"
        >
           {wishlist.name}
        </p>
        <h4
          className = "x"
          onClick = { () => {
              props.removeFromWishlist(index)
          }} 
        >
          x 
        </h4>
      </ul>
      <button
        className = "buttons"
        onClick = { () => {
          props.addToLog(index)
        }}
      >
        Add to Where You've Been
      </button>
      <hr/>
    </div>
  )
}


export default Remove
