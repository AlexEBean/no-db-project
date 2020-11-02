import React from 'react'


const Add = (props) => {
  const {index} = props
  return (
    <ul>
       <div className = "row">
        <p
            className = "place"
            onClick = { () => {
              props.addToWishlist(index)
            }}
        >
            {props.placeList.name}
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
      <hr/>
    </ul>
  )
}


export default Add
