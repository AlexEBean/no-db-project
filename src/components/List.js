import React, { Component } from 'react'
import Add from "./Add"
import axios from "axios"


class List extends Component {
    constructor(){
        super()
        this.state = {
            displayList: [],
            wishlist: []
            
        }
    }

    componentDidMount() {
        axios.get("/api/list")
        .then((res) => { 
          this.setState({
            displayList: res.data
          })
        })
        .catch((err) => console.log(err))
      }

    addToWishlist(index) {
        axios.post(`/api/wishlist/${index}`)
        .then((res) => {
          this.setState({
            wishlist: res.data
          })
        })
        .catch((err) => console.log(err))
    }
    

    render() {
        let mappedList = []
        mappedList = this.state.displayList.map((placeList, index) => 
            <Add
            key = {placeList.id}
            placeList = {placeList}
            addToWishlist = {this.addToWishlist}
            index = {index}
            />
        )

        return (
                <ul className = "list"
                >
                  {mappedList}
                </ul>
        )
    }
}

export default List
