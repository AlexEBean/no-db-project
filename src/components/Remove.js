import React from 'react'


const Remove = (props) => {
    const {wishlist, index} = props
  return (
    <ul className = "row">
       <p
        onClick = { () => {
            props.addToLog(index)
        }}
       >
           {wishlist.name}
        </p>
       <p
        onClick = { () => {
            props.removeFromWishlist(index)
        }} 
       >
       X </p>
    </ul>
  )
}


export default Remove
