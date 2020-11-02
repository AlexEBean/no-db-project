import React, { Component } from 'react'
import Remove from "./Remove"
import axios from "axios"


class Wishlist extends Component {
    constructor(){
        super()
        this.state = {
            displayWishlist: [],
            log: []
        }
    }

    componentDidMount() {
        axios.get("/api/wishlist")
        .then((res) => {
          this.setState({
            displayWishlist: res.data
          })
        })
        .catch((err) => console.log(err))
      }

    addToLog(index) {
        axios.post(`/api/log/${index}`)
        .then((res) => {
          this.setState({
            log: res.data
          })
        })
        .catch((err) => console.log(err))
    }

    removeFromWishlist(index){
        axios.delete(`/api/wishlist/${index}`)
        .then((res) => {
          this.setState({
            displayWishlist: res.data
          })
        })
        .catch((err) => console.log(err))
    }
      
    render() {
        let mappedWishlist = []
        mappedWishlist = this.state.displayWishlist.map((wishlist, index) => 
            <Remove
            key = {wishlist.id}
            wishlist = {wishlist}
            addToLog = {this.addToLog}
            index = {index}
            removeFromWishlist = {this.removeFromWishlist}
            />
        )
        
        return (
          <div className = "column">
            <h1 className = "title"
            > 
              Where You Want to go </h1>
            <ul className = "list"
              >
                {mappedWishlist}
            </ul>
          </div>          
        )
    }
}

export default Wishlist
