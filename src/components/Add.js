import React from 'react'


const Add = (props) => {
  return (
    <ul 
      
        onClick = { () => {
            props.addToWishlist(props.index)
        }}
    >
       {props.placeList.name}
    </ul>
  )
}


export default Add
