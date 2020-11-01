import React from 'react'


const Remove = (props) => {
    const {wishlist, index} = props
  return (
    <div>
      <ul className = "row">
        <p
          className = "place"
          onClick = { () => {
            props.addToLog(index)
          }}
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
      <hr/>
    </div>
  )
}


export default Remove
