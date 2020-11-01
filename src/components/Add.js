import React from 'react'


const Add = (props) => {
  return (
    <ul 
        className = "place"
        onClick = { () => {
            props.addToWishlist(props.index)
        }}
    >
       {props.placeList.name}
        <hr/>
    </ul>
  )
}


export default Add
